const originbtn = document.querySelector('#originbtn')
const origin = document.querySelector('.origin')
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
    if (destination.value === 'ibadan') { amount.value = `${prise[0]}`} else if (destination.value === 'lagos') {amount.value = `${prise[1]}`} else if (destination.value === 'Abuja') {amount.value = `${prise[2]}`}
}

price.addEventListener('click', ()=>{
  if((fullname.value.length > 0) || (phoneNo.value.length > 0)){
   priceCal()} else{notice.innerHTML='please fill the above details correctly'}
})
ticketNumber.addEventListener('click', ()=>{
  number.value = `T${ticketRandom}tp`
})
total.addEventListener('click', ()=>{
  totalamount.value = `${ amount.value * sitNo.value }`
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
     origin.append(option)
  
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
        if(origin.classList.contains('origin')) {origin.classList.replace('origin', 'origin1')} else {origin.classList.replace('origin1', 'origin')}
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

      fullname.addEventListener('input', ()=>{
    nameshow.innerHTML = fullname.value
})