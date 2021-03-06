const http = require("http");
const express = require("express");
const app = express(); // make me a new app
const server = http.createServer(app);

// app please listen for requests
// '/' means go to home page
// the anonymous function will handle the http request
// and send back the http response
app.get('/', (req,res)=>{
    // req and res are passed to my anonymous function
    // I need to make room for them with placeholders
    res.send("HELLO WORLD");
});

app.get('/cats', (req,res)=>{
    res.send(`
    <ul>
        <li><a href='/cats/Mao'>Mao</a></li>
        <li><a href='/cats/Cash'>Cash</a></li>
        <li><a href='/cats/Molly'>Molly</a></li>
    </ul>
    `);
});
// catName is a route param - an argument that is param
app.get('/cats/:catName', (req,res)=>{
    const catName = req.params.catName
    res.send(`
    <h1>Hello and welcome to ${catName}'s slice of paradise!</h1>
    <a href='/cats/'>Back</a>
    `)
});

// "turn on the server"
// what port do I listen on?
// what is my IP address?
// a callback that runs after we've started
server.listen(3000,'localhost',()=>{
    console.log("Running on port http://localhost:3000")
});

