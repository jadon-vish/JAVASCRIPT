const tinderUser={}
tinderUser.id="123abc"
tinderUser.name="Sam"
tinderUser.isLoggedIn=false
//console.log(tinderUser);

const regularUser={
    email:"some@gmail.com",
    fullName:{
        userfullName:{
            firstName:"Vishesh",
            lastName:"Jadon"
        }
    }
}

//console.log(regularUser.fullName.userfullName.firstName);

const obj1={1:"a",2:"b"}
const obj2={3:"c",d:"d"}
const obj3={5:"e",6:"f"}

//const obj4=Object.assign({},obj1,obj2,obj3)
const obj4={...obj1,...obj2,...obj3}

//console.log(obj4);

//console.log(tinderUser);

// console.log(Object.keys(tinderUser));

// console.log(Object.values(tinderUser));

// console.log(tinderUser.hasOwnProperty("named"));

const course={
    coursename:"Java",
    price:"999",
    instructor:"Vishesh",
    duration:"4 months"
}

const {coursename,instructor:inst} = course

console.log(coursename,inst);

