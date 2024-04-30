//singleton - only by contructor method

//objects literals:

const mySym=Symbol("key1")

const jsUser={
    name:"Vishesh",
    "full Name":"Vishesh Jadon",
    mySym:"myket1",//will be treated as simple object key value pair
    [mySym]:"mykey1",//now treated as symbol
    age:26,
    location:"Gwalior",
    email:"vishesh@google.com",
    isLoggedIn:false,
    lastLoginDays:["monday","tuesday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full Name"]);
// console.log(jsUser["mySym"]);

// Object.freeze(jsUser)
// jsUser.email="vishesh@microsoft.com" //will not change the value now
// console.log(jsUser);

//add function to object  - will be treated as type 1 citizens -> can be stored in a variable.

jsUser.greetings=function(){
    console.log("Hello js user");
}

jsUser.greetings2=function(){
    console.log(`Hello js user ${this.name}`);
}

console.log(jsUser.greetings2());
//jsUser.greetings - function reference but not executed
