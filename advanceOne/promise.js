const promiseOne= new Promise(function(resolve,reject){
    //async tasks:
    //DB calls
    //Crypto tasks
    //nw calls
    setTimeout(function(){
        console.log("Async task is completed");
        resolve();
    },1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 3");
        resolve({username:"Vishesh", email:"example@ex.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if (!error){
            resolve({username:"Vishesh",pwd:"1234"})
        }
        else{
            reject("ERROR:Something went wrong")
        }
    },1000)
})

promiseFour
.then((user)=>{
    console.log(user);
    return user.username
})
.then((myusername)=>{
    console.log(myusername);
})
.catch((err)=>{
    console.log(err);
}).finally(()=>{
    console.log("The promise is either resolved or rejected");
})


const promiseFive= new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if (!error){
            resolve({username:"JAVASCRIPT",pwd:"1234"})
        }
        else{
            reject("ERROR:JS went wrong")
        }
    },1000)
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive
    console.log(response);
    } catch (error) {
        console.log(error);
    }
    
}

consumePromiseFive()

// can use any , then cathc way or async await

