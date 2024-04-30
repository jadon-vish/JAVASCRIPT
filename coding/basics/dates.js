let mydate=new Date()

const weekdays= ["sunday","monday","tuesday","thursday","friday","saturday"]

// console.log("today is: ",weekdays[mydate.getDay()]);
// console.log("current time: ",`${mydate.getHours() > 12 ? mydate.getHours()+" PM":mydate.getHours()+" AM"}:${mydate.getMinutes()}:${mydate.getSeconds()}`);

function dateFormatBySymbol(sym){
    let myCurrDate= new Date()
    return `${mydate.getMonth()}${sym}${mydate.getDay()}${sym}${mydate.getFullYear()}`
}

console.log(dateFormatBySymbol("/"));
