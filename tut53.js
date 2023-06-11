console.log("this is tutorial 53");

function greet(name,greettext = "Greetings from JS"){
    console.log(greettext + " " + name)
    console.log(name + " is a good boy");
}
function greeting(name,greettext){
    return(greettext + " " + name);
}

let name = "Shreyansh";
let name1 = "Raaz";
let name2 = "Suryansh";
GreetText = "Good Morning";
greet(name,GreetText);
greet(name1,GreetText);
greet(name2);
let ReturnVal = greeting(name2,GreetText);
console.log(ReturnVal);





// console.log(name + " is a good boy");
// console.log(name1 + " is a good boy");
// console.log(name2 + " is a good boy");