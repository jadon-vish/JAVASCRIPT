const user={
    username:"Vishesh",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.username} , welcome to the app`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username="Sam"
// user.welcomeMessage()

//console.log(this);

// function sample(){
//     let username="Vishesh"
//     console.log(this.username); // does'nt work in functions
// }

// sample()


