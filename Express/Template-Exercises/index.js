const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
const express = require('express');
const app = express();
const es6Renderer = require('express-es6-template-engine');
app.engine('html', es6Renderer);
app.set('views', 'templates');
app.set('view engine', 'html');
const server = http.createServer(app);

app.get('/',(req,res)=>{
    res.render("home")
})

app.get('/:word',(req,res)=>{
    const {word} = req.params
    res.render('greet', {
        locals: {
            word:word
        }
    })
})
server.listen(port,hostname,()=>{
    console.log(`running on http://${hostname}:${port}`)
})