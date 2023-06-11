// console.log("Hello world");
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Psuedo selectors & more designing</title>
      <style>
      .container{
        border: 3px solid purple;
        background-color: rosybrown;
        padding: 35px;
        margin: 15px auto;
        width: 650px;
    }
    .btn{
        background-color: royalblue;
        padding: 6px;
        border: none;
        cursor: pointer;
        border-radius: 12px;
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    }
    a{
        text-decoration: none;
        color: black;
    }
    a:hover{
        color: blanchedalmond;
    }
    a:visited{
        color: rgb(196, 196, 16);
    }
    a:active{
        color: springgreen;
    }
      </style>
  </head>
  <body>
      <div class="container" id="cont1">
          <h3>Heading1</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, at ducimus libero, amet consequatur ad asperiores doloremque praesentium officia fuga similique quidem sed quod labore eum. Perspiciatis debitis ipsum rem.</p>
          <a href="https://google.com" class="btn">Read More</a>
          <button class="btn"> Contact Us</button>
      </div>
  </body>
  </html>`);
//   res.end('Hello World')
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});