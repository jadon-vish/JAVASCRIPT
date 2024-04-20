//var , let , const -> Values will be assigned in the named memory  
const accountId=12345 // this cannot be changed / reassigned
var accountEmail="abc@gmail.com" // can be changed
let accountPassword="abcd1234" // can be changed
accountCity="Gwalior" // can also work and can be changed
let accountState; // undefined


// let and var has scope differences

//accountId = 2 - not allowed

accountEmail = "def@def.com"
accountPassword="1111"
accountCity="Indore"

//console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

/* 
Prefer not to use var . Use let and const instead.
because of block and functional scope
*/