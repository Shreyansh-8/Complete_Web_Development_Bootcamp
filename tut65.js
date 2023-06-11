// Synchronous or blocking
// -line by line execution 


// ASynchronous or Non-blocking
// -line by line execution not guaranteed
// -Call backs will fire

const fs = require("fs");
fs.readFile("hello.txt","utf-8", (err,data)=>{
    console.log(data);
});
console.log("The data of the file is ");
