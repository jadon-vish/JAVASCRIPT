// On the basis of storage and access of data , 2 datatypes in javscript - primitve & non primitive

// Primitive - Call by value - original data not given , copy given , so original value remains unchanged
// 7 types:  string , number , boolean , null , undefined , symbol , bigint

const score=100
const price = 30.4

const isLoggedIn = false
const temp=null

let email

const id= Symbol("123")
const anotherId = Symbol("123")

const bigNumber = 12321321313124243423n



// reference type (non primitive) - reference of data is given , changes the original value
// Arrays , objects , functions

const heroes=["Shaktiman" , "Hatim", "Krish"]

const person = {
    name:"Peter",
    age:30
}

let myFunction = function(){
    console.log("print inside the function");
}

console.log(typeof temp);


// *********************Memories**********************

// Stack - primitive types

let score1=50
let score2=score1
score2=80

//** */ score2 will change but not scor1 because they are stored in stack and a copy of score1 is given to score2

// Heap - non primitive types

const cust1={
    email:"abc@cc.com",
    upi:"abc@ybl"
}

const cust2=cust1

cust2.email="def@cc.com"

//this will change the email for cust1 as well , in heap reference is passed.
