const http = require("http");
const express = require("express");
const morgan = require("morgan");

const PORT = 3000;

const app = express();
const server = http.createServer(app);
const logger = morgan('tiny')

// app.use a piece of middleware
app.use(logger)

app.use('/', (req,res,next)=>{
    // A piece of middleware can modify the req/res
    req.stuff = 'WASSSUPPPPP'
    // The way you will see this 90%:
    // req.session
    // Each visitor to browser will have their own session
    /* 
        req.session.user = {
            id: 12345,
            username: 'stormy110',
            needsPasswordReset: true,
        }
    */
    next()
})
app.use(express.static('public'))
app.get('/',(req,res)=>{
    console.log("Hello World " + req.stuff)
    res.send(`
    <html>
        <head>
            <link rel="stylesheet" href="/stylesheets/styles.css">
        </head>
        <body>
            <h1>LIPSUM OREM LKUGKJYKJFKJG HBVYTV</h1>
        </body>
    </html>
    `)
})

server.listen(PORT, ()=>{
    console.log(`Running on http://localhost:${PORT}`)
})