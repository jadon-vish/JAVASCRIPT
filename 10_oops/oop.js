// const user={
//     username:"Vishesh",
//     loginCount:8,
//     isSignedIn:true,
//     getUserDetails:function(){
//         //console.log("get user details from db");
//         console.log(this);
//     }
// }

// console.log(this);

function user(username,logincount,isLoggedIn){
    this.username=username,
    this.logincount=logincount,
    this.isLoggedIn=isLoggedIn,
    this.greetings=function(){
        console.log("Hi ", this.username);
    }

    // return this
}

const newuser=new user("Vishesh",6,true)
const userTwo =new user("Chaicode",4,false)
console.log(newuser.constructor);