const fs = require("fs");
const path = require("path");
const express = require("express");
const app = express();
const port = 80;

// EXPRESS SPECIFIC STUFF
app.use('/static',express.static('static'));// For servering static files
app.use(express.urlencoded());


// PUG SPECIFIC STUFF
app.set('view engine', 'pug');// set the template engine as pug
app.set('views',path.join(__dirname,'views'));// set the view directory

// ENDPOINTS
app.get('/',(req,res)=>{
    const con = "This is the best content on the internet";
    const params = {'title':'This is title','content':con};
    res.status(200).render('index.pug',params);
});
app.post('/',(req,res)=>{
    name = req.body.name
    age =req.body.age
    gender = req.body.gender
    address = req.body.address
    more = req.body.more

    let writeToutput = `The name of the client is ${name},he is ${gender} and he is ${age} years old, he resides at ${address}, more aboout him/her:${more}`
    fs.writeFileSync('output.txt',writeToutput);

    const params = {'message':'The form is submitted successfully'}; 

    res.status(200).render('index.pug',params);
});

// START THE SERVER
app.listen(port,()=>{
    console.log(`The application started successfully on ${port}`);
});