// Date represent the present / single moment at any platform. It is an integral number representing 
// the mili seconds from 1 jan 1970.

let myDate = new Date()
//console.log(myDate.toDateString());
//console.log(typeof myDate);

let createDate = new Date(2024,0,20) // months start from 0
//console.log(createDate.toDateString());

let createDate1 = new Date(2024,0,20,5,3) // months start from 0

//console.log(createDate1.toLocaleString());

let customDate= new Date("2024-04-21")
//console.log(customDate.toLocaleString());

let indianDate=new Date("04-21-2024")
// console.log(indianDate.toLocaleString());

//let timeStamp = Date.now()

//console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
newDate.toLocaleString('default',{
    weekday:"long",

})

console.log(newDate.toLocaleString('default'));


