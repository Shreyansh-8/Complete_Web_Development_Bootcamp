const fs = require("fs");
let text1 = fs.readFileSync("hello.txt","utf-8");
text =text1.replace("Shreyansh Pandey", "Shreyansh");
console.log("The content of the file is ");
console.log(text1);

console.log("Creating a new file...");
fs.writeFileSync("New.txt",text);