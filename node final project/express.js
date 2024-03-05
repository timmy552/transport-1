const express = require('express')
const app = express()
const flash = require('connect-flash')
const session = require('express-session')
const bcrypt = require('bcrypt')
const mongoDBsession = require('connect-mongodb-session')(session)
const path = require('path')
const connectDB = require("./utils/connectDB")
const userinfo = require('./model/userRegistrationSchema')
const admin = require('./model/adminRegistration')
const tickets = require('./model/ticketschema')
// console.log(tickets)
connectDB()


app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))
app.use(express.static(path.join(__dirname, 'public')))

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({extended: true}))

const store = new mongoDBsession({
    uri : "mongodb+srv://Timmy22:5b3PvoFimDo6iYCj@cluster0.mk2fyaq.mongodb.net/",
    collection: "timeSession"
})
app.use(session({
    secret: 'keyboardcat',
        saveUninitialized: true,
        resave: true,
        store:store,
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 7 // 1 week session time
          },
    }))
    app.use(flash())
    
    const authentication =  (req,res,next) =>{
        if(req.session.authentication){
            next()
        } else {
            res.redirect('/login')
        }
    }
    
app.get('/userRegistration', (req,res)=>{
    // console.log(req.sessionID)
    res.render("userRegistration.ejs", { messages: req.flash('info') })
})

app.post('/register', async(req,res)=>{
    try{
        const {username, password, fullname, passport, phone, state} = req.body
        console.log({username, password, fullname, passport, phone})
        const foundUser = await userinfo.findOne({username: username})
        if(foundUser){
            req.flash('info', 'User Already Exist')
            res.redirect('/userRegistration')
        } 
        const hashedPassword = await bcrypt.hash(password, 10)
        const userInfo = new userinfo({
         username: username,
        password: hashedPassword,
        fullname: fullname,
        passport: passport,
        state: `${state}/NG`,
        phone: phone,
        role: 'user',
        active: true
    })
    await userInfo.save()
    res.redirect('/login')}
    
    catch(error){
        console.log(error)
    }
})
  app.get('/adminRegistration', (req,res)=>{
    res.render('adminRegistration.ejs', { messages: req.flash('info') })
  })

  
  app.post('/adminregister', async(req,res)=>{ 
    try{
    const{username, password, fullname, passport, phone, state} = req.body
    console.log({username, password})
    const foundadmin = await admin.findOne({username: username})
    if(foundadmin){
        req.flash('info', 'User Already Exist')
        res.redirect('/adminRegistration')
    }
    const hashedPassword = await bcrypt.hash(password, 10)// the high the salt rounds the long=er time it takes for it to deliver 
    const user = new admin({
        username: username,
        password: hashedPassword,
        fullname: fullname,
        passport: passport,
        state: `${state}/NG`,
        phone: phone,
        role: 'admin',
        active: true
    })
      await user.save()
      res.redirect('/login')
}
      catch(error){
        console.log(error)
      }
    })
app.get('/login', (req,res)=>{
    res.render('login.ejs', { messages: req.flash('info') })
})

let foundUser  // logining in the user into his or her dashbord 
let foundAdmin
app.post('/login', async(req,res) => {
    const{username, password} = req.body
    // console.log({username, password})
     foundUser = await userinfo.findOne({username: username})
    // console.log(foundUser)
    if(foundUser){
        const user = await bcrypt.compare(password, foundUser.password)
        if (user){
            req.session.authentication = true
            res.redirect('/userDashboard')
        }else{
            req.flash('info', 'Username or paswword is not found')
            res.redirect('/login')
        }} else{
            foundAdmin = await admin.findOne({username: username})
            if(foundAdmin){
                const user = await bcrypt.compare(password, foundAdmin.password)
                if(user){
                    res.redirect('/adminDashboard')
                } else{
                    req.flash('info','Username or paswword is not found')
                    res.redirect('/login')
               }
            }}
        })
  app.get('/userDashboard', authentication, (req,res)=>{
    // console.log(foundUser)
     res.render("userDashboard.ejs", {foundUser})
   })
  app.get('/adminDashboard', async(req,res)=>{
    const ticket = await tickets.find()
    // console.log(foundUser)
     res.render("adminDashboard.ejs", {foundAdmin, ticket})
   })

   app.get('/delete/:id', async(req,res) => {
    const{id} = req.params
    console.log(id)
    const foundTicket  = await tickets.findByIdAndDelete({_id:id})
   console.log(foundTicket)
    res.redirect("/adminDashboard")
})
   app.get('/deleteagain/:id', async(req,res) => {
    const{id} = req.params
    console.log(id)
    const foundTicket  = await tickets.findByIdAndDelete({_id:id})
   console.log(foundTicket)
    res.redirect("/login")
})
   app.get('/find/:id', async(req,res) => {
    const{id} = req.params
    console.log(id)
    const foundTicket  = await tickets.findById({_id:id})
   console.log(foundTicket)
    res.render('adminTicketEdit.ejs', {foundTicket})
})
app.post('/ticketedit', async(req,res)=>{
    const {ticketnumber,phonenumber,fullname, destination, origin,depart,sit} = req.body
    console.log({fullname, destination, origin,depart,sit})
     await tickets.findOneAndUpdate({ ticketnumber: ticketnumber}, {$set:{fullname: fullname}})
     await tickets.findOneAndUpdate({ ticketnumber: ticketnumber}, {$set:{destination: destination}})
     await tickets.findOneAndUpdate({ ticketnumber: ticketnumber}, {$set:{origin: origin}})
     await tickets.findOneAndUpdate({ ticketnumber: ticketnumber}, {$set:{phonenumber: phonenumber}})
     await tickets.findOneAndUpdate({ ticketnumber: ticketnumber}, {$set:{depart: depart}})
     await tickets.findOneAndUpdate({ ticketnumber: ticketnumber}, {$set:{sit: sit}})
          // console.log(user)
        req.flash('info', 'Sucessfully updated!')
        res.redirect('/login')
    }
)
   
app.get('/tickets', (req,res)=>{
    res.render('tickets.ejs')
})
app.get('/ticketview', async(req,res)=>{  
    res.render("ticketview.ejs", {findticket})
})
app.get('/adminticketview', async(req,res)=>{  
    res.render("adminticketview.ejs", {findticket})
})
let findticket
app.post('/ticketsearch', async(req,res) => {
    const{ticketnumber} = req.body
    console.log({ticketnumber})
    findticket = await tickets.findOne({ticketnumber:ticketnumber})
    if(findticket){
        res.redirect('/ticketview')
    }})
app.post('/admintickets', async(req,res) => {
    const{ticketnumber} = req.body
    console.log({ticketnumber})
    findticket = await tickets.findOne({ticketnumber:ticketnumber})
    if(findticket){
        res.redirect('/adminticketview')
    }})
    

    app.get('/dashboard', (req,res)=>{
        res.render('dashboard.ejs')
    } )
    app.get('/homepage', (req,res)=>{
        res.render('index.ejs')
    } )
    app.get('/forgetpassword', (req,res)=>{
        res.render('forgetpassword.ejs')
    } )

    app.post('/forgetpassword', async(req,res)=>{
        const {username, newpassword} = req.body
        // console.log({username,newpassword})
            const hashedPassword = await bcrypt.hash(newpassword, 10)
            const user = await userinfo.findOneAndUpdate({username: username}, {$set:{password: hashedPassword}})
            // console.log(user)
            req.flash('info', 'password sucessfully updated!')
            res.redirect('/login')
        }
    )
// app.get('get/ticketview', async(req,res)=>{
//     const{id} = req.params
//     console.log(id)
//     const foundTicket  = await tickets.findOne({ticketnumber: ticketNumber})
//     // console.log(foundUser)
//      res.redirect("ticketview.ejs")
//    })

   app.post('/tickets', async(req,res)=>{ 
    try{
    const{fullname,origin, destination, depart, sit, phonenumber, price, ticketnumber, total} = req.body
    console.log({fullname,origin, destination, depart, sit, phonenumber, price, ticketnumber,total})
    // const foundadmin = await tickets.findOne({origin: origin})
    // if(foundadmin){
    //     req.flash('info', 'User Already Exist')
    //     res.redirect('/adminRegistration')
    // }
    const user = new tickets({
        fullname: fullname,
        origin: origin,
        destination: destination,
        depart: depart,
        sit: sit,
        // state: `${origin}/NG`,
        phonenumber: phonenumber,
        price: price,
        ticketnumber: ticketnumber,
        total: total,
        role: 'user'
    })
      await user.save()
      res.redirect('/userDashboard')
}
      catch(error){
        console.log(error)
      }
    })
   app.post('/dashboard', async(req,res)=>{ 
    try{
    const{fullname,origin, destination, depart, sit, phonenumber, price, ticketnumber, total} = req.body
    console.log({fullname,origin, destination, depart, sit, phonenumber, price, ticketnumber,total})
    // const foundadmin = await tickets.findOne({origin: origin})
    // if(foundadmin){
    //     req.flash('info', 'User Already Exist')
    //     res.redirect('/adminRegistration')
    // }
    const user = new tickets({
        fullname: fullname,
        origin: origin,
        destination: destination,
        depart: depart,
        sit: sit,
        // state: `${origin}/NG`,
        phonenumber: phonenumber,
        price: price,
        ticketnumber: ticketnumber,
        total: total,
        role: 'user'
    })
      await user.save()
      res.redirect('/dashboard')
}
      catch(error){
        console.log(error)
      }
    })
    app.post('/logout', (req,res)=>{
        req.session.destroy((err)=>{
            if(err) throw err
            res.redirect('/login')
        })
    })

const port = 2000
app.listen(port, ()=>{
    console.log(`connecting port ${port - 1998}k`)
})    