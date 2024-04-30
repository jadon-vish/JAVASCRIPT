const myArr=[1,2,3,4] //can store multiple types of data under a single variable.
//arrays copy operations are shallow operations - changes the original arrays as well
const heroes =["Batman","superman"]
const myArr2=new Array(1,2,3,4)

myArr.push(5)
myArr.push(6) //adds element at last
myArr.pop() // removes last element
myArr.unshift(0) //adds element at the beginning - not optimized way
myArr.shift() // removese first element

//console.log(myArr.includes(4)); // gives true or false boolean
//console.log(myArr.indexOf(30)); // returns index else -1
//console.log(myArr);

// const newArr = myArr.join() // converts array to comma seperated string of elements
// console.log(myArr);
// console.log(typeof newArr);

// slice , splice

const myArr3 = [0,1,2,3,4,5,6]
console.log("A" , myArr3);
const newArr1=myArr3.slice(1,4) //will return firstIndex to lastindex-1 but does'nt change the main arrray
console.log(newArr1);
console.log("B" , myArr3);

const newArr2=myArr3.splice(1,4) //will return firstindex to lastindex but also changes the original array
console.log(newArr2);
console.log("C",myArr3);


