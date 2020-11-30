const http = require("http");
const express = require("express");
const app = express();

const serveContent = (title)=> `
<!DOCTYPE html>
<html> 
    <head> 
        <title>${title}</title>
    </head>
    <body>
        <h1>${title}</h1>
        <p>Welcome my friend!</p>
        <p>What is your name?</p>
        <input type=text></input>
        <button type=submit>SUBMIT</button>
    </body>
</html>
`;

const _404error = `
<!DOCTYPE html>
<html> 
    <head> 
        <title>An Error you have found</title>
    </head>
    <body>
        <h1>404</h1>
        <blockquote>"An Error you have found" - Yoda
        </blockquote>
    </body>
</html>
`;

const server = http.createServer(app)

const serveHome = (req,res)=>{
    
    res.send(serveContent('Home'))
}

app.get('/', serveHome)

app.get('/home', serveHome)

app.get('/about', (req,res)=>{
    
    res.send(serveContent('About'))
})
app.get('/contact', (req,res)=>{
    
    res.send(serveContent('Contact'))
})
app.get('*', (req,res)=>{
    res.send(_404error)
})


server.listen(3000,()=>{
    console.log('listening on port 3000')
})