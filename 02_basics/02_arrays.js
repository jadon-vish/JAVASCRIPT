const myArr1= ["batman","superman"]
const myArr2= ["ironman","thor","hulk"]
const myArr3= ["hatim","shaktiman"]

const newArr = myArr2.concat(myArr1,myArr3) // all in single array
//console.log(newArr);

//with spread operator - most favoured one
const newArr2= [...myArr1,...myArr2,...myArr3]
//console.log(newArr2);

//convert multi dimensional array to single dimension -flat
const multiArr= [1,2,[3,4],4,4,[2,[6,7,8]]]
const singleArr=multiArr.flat(Infinity)

//console.log(singleArr);

// console.log(Array.isArray("something"));
// console.log(Array.from("Vishesh"));
// console.log(Array.from({name:"Vishehs"})); //cannot form an array

let score1 = 100
let score2 = 200
let score3 = 300

//console.log(Array.of(score1,score2,score3));