// Immediately Invoked Functions Expressions -  immediately executes to remove pollution due to global scope

(function chai(){
    console.log("DB CONNECTED 1");
})();

(function chai2(){
    console.log("DB CONNECTED 2");
})();

((name)=>{
    console.log(name,"DB connected 3");
})("Vishesh");