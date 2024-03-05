const originbtn = document.querySelector('#originbtn')
const from = document.querySelector('.origin')
const destinationbtn = document.querySelector('#destinationbtn')
const destination = document.querySelector('.destination')
const departbtn = document.querySelector('#departbtn')
const depart = document.querySelector('.depart')
const sitbtn = document.querySelector('#sitbtn')
const sitNo = document.querySelector('.sit')
const fullname = document.querySelector('.fullname')
const phoneNo = document.querySelector('.phonenumber')
const submitbtn = document.querySelector('.submitbtn')
const ticketName = document.querySelector('#ticketName')
const ticketPlace = document.querySelector('#ticketPlace')
const ticketPrice = document.querySelector('#ticketPrice')
const ticketSit = document.querySelector('#ticketSit')
const price = document.querySelector('#price')
const amount = document.querySelector('.amount')
const ticketNumber = document.querySelector('#ticketnumber')
const number = document.querySelector('.number')
const notice = document.querySelector('#notice')
const totalamount = document.querySelector('.totalamount')
const total = document.querySelector('#total')
const ticketRandom = Math.floor(Math.random()*200000)+1000
submitbtn.addEventListener('click', ()=>{
  if((fullname.value.length > 0) || (phoneNo.value.length > 0)) {
    
  }
})
function priceCal (){
const prise = [20000,30000,35000,25000]
    if (from.value==="lagos"&&destination.value === 'ibadan') { amount.value = `${prise[0]}`} else if (from.value==="lagos"&&destination.value === 'Port Harcourt') {amount.value = `${prise[1]}`} else if (from.value==="lagos"&&destination.value === 'Abuja') {amount.value = `${prise[2]}`} else if (from.value==="lagos"&&destination.value === 'lagos') {amount.value = `lol Try Again`} else if (from.value==="ibadan"&&destination.value === 'lagos') {amount.value = `${prise[0]}`} else if (from.value==="ibadan"&&destination.value === 'Port Harcourt') {amount.value = `${prise[1]}`} else if (from.value==="ibadan"&&destination.value === 'Abuja') {amount.value = `${prise[2]}`} else if (from.value==="ibadan"&&destination.value === 'ibadan') {amount.value = `lol keep trying`} else if (from.value==="Port Harcourt"&&destination.value === 'ibadan') {amount.value = `${prise[0]}`} else if (from.value==="Port Harcourt"&&destination.value === 'lagos') {amount.value = `${prise[1]}`}else if (from.value==="Port Harcourt"&&destination.value === 'Abuja') {amount.value = `${prise[2]}`} else if (from.value==="Port Harcourt"&&destination.value === 'Port Harcourt') {amount.value = `lol Keep it up`} else if (from.value==="Abuja"&&destination.value === 'ibadan') {amount.value = `${prise[2]}`} else if (from.value==="Abuja"&&destination.value === 'lagos') {amount.value = `${prise[3]}`} else if (from.value==="Abuja"&&destination.value === 'Port Harcourt') {amount.value = `${prise[1]}`} else if (from.value==="Abuja"&&destination.value === 'Abuja') {amount.value = `lmao`}
}

price.addEventListener('click', ()=>{
  if((fullname.value.length > 0) || (phoneNo.value.length > 0)){
   priceCal()} else{notice.innerHTML='please fill the above details correctly'}
})
ticketNumber.addEventListener('click', ()=>{
  if((fullname.value.length > 0) || (phoneNo.value.length > 0)){
    number.value = `T${ticketRandom}tp `} else{notice.innerHTML='please fill the above details correctly'}
 })

total.addEventListener('click', ()=>{
 
  if((fullname.value.length > 0) || (phoneNo.value.length > 0)){
    totalamount.value = `${ amount.value * sitNo.value }`} else{notice.innerHTML='please fill the above details correctly'}
  
})

const list = [
    {
      place: 'ibadan',
      price: 15000
    },
    {
      place: 'lagos',
      price: 20000
    },
    {
      place: 'Abuja',
      price: 25000
    },
    {
      place: 'Port Harcourt',
      price: 25000
    }
   ]

  
//    select.innerHTML= 'From PH to:'
   for (let index = 0; index < list.length; index++) {
     const element = list[index].place;
     const option = document.createElement('option')
     option.value = element
     option.innerHTML = element
     from.append(option)
  
    }

//    select.innerHTML= 'From PH to:'
   for (let index = 0; index < list.length; index++) {
     const element = list[index].place;
     const option = document.createElement('option')
     option.value = element
     option.innerHTML = element
     destination.append(option)
  
    }

    const sit = [1,2,3,4,5,6,7,8,9,10]
    for (let index = 0; index < sit.length; index++) {
        const element = sit[index];
        const option = document.createElement('option')
     option.value = element
     option.innerHTML = element
     sitNo.append(option)
        
    }

    originbtn.addEventListener('click', () => {
        if(from.classList.contains('origin')) {from.classList.replace('origin', 'origin1')} else {from.classList.replace('origin1', 'origin')}
      })
    destinationbtn.addEventListener('click', () => {
        if(destination.classList.contains('destination')) {destination.classList.replace('destination', 'destination1')} else {destination.classList.replace('destination1', 'destination')}
      })
    departbtn.addEventListener('click', () => {
        if(depart.classList.contains('depart')) {depart.classList.replace('depart', 'depart1')} else {depart.classList.replace('depart1', 'depart')}
      })
    sitbtn.addEventListener('click', () => {
        if(sitNo.classList.contains('sit')) {sitNo.classList.replace('sit', 'sit1')} else {sitNo.classList.replace('sit1', 'sit')}
      })

     const profileCheck = document.querySelector('.profile')
     const userDetails = document.querySelector('.userDetails2')
     profileCheck.addEventListener('click', () => {
      if(userDetails.classList.contains('userDetails2')) {userDetails.classList.replace('userDetails2', 'userDetails')} else {userDetails.classList.replace('userDetails', 'userDetails2')}
    })
      fullname.addEventListener('input', ()=>{
    nameshow.innerHTML = fullname.value
})


// const myChart = document.querySelector("#chart").getContext("2d")

// const travelRate = new Chart(myChart, {
//   type: "bar",
//   data:{
//     labels: ["lagos", "ibadan", "abuja"],
//     datasets:[{
//       lable: 'travel rate',
//       data: [
//         34,
//         20,
//         40
//       ]
//     }]
//   },
//   options:{}
// })

// const data = {
//   labels: ['Abuja', 'Lagos', "Ibadan"],
//   datasets:[{
//     data: [20,30,40],
//     backgroundColor: 'blue'
//   }]
// };

// const config = {
//   type:'bar',
//   data: data
// };

// const chart = new Chart(
//   document.getElementById('chart'), config
// );