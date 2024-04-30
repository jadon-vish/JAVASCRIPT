let score = "33aa" 

//console.log(typeof score);

// string to number conversion
let valInNum=Number(score) // NaN - when string operation with numbers

//console.log(typeof valInNum, valInNum);

let score1=false

let nullValToNum=Number(score1)

//console.log(typeof nullValToNum, nullValToNum);
// to number
// "23aa" -> NaN
// "23"  -> 23
// null -> 0 
// undefined -> 0
// true - 1, false - 0

let booltest=undefined

//console.log(typeof Boolean(booltest), Boolean(booltest));
// to boolean
//  1 -> true , 0 -> false
// "string" -> true , ""-> false
// null, undefined -> false

// **********************Operations*******************

// let str1="Vishesh"
// let str2=" Jadon"
// let str3=str1+str2
// console.log(str3);

console.log(String(undefined));