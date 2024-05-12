function addTwoNumbers(num1,num2){ //parameters
    return num1+num2;
}

const res= addTwoNumbers(4,5)

//console.log(res); //arguements

function loginUserMessage(username="Peter"){
    if(!username){
        return "invalid username"
    }
   return `${username} just logged in`
}

//console.log(loginUserMessage()); //undefined


function calculateCartPrice(val1,val2,...num1){
    return num1
}

//console.log(calculateCartPrice(200,300,400,600));

const user={
    username:"Vishesh",
    price:999
}

function handleObject(anyuser){
    console.log(`username is ${anyuser.username} and price is ${anyuser.price}`);
}

handleObject(user)
