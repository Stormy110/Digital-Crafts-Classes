const http = require("http");
const express = require("express");
const app = express();

const db = {people:[], places:[], things:[]}

const checkObject = (req,res,next)=>{
    
    let {type} = req.params
    if(!db.hasOwnProperty(type)) return res.send('This type is not in the object')
    next()
}

const timeLogger = (req,res,next)=>{
    let requestTime = new Date()
    console.log("A request came in at "+requestTime)
    req.requestTime = requestTime
    res.content = requestTime
    next()
}

app.get('/', timeLogger, (req,res)=>{
    res.send(`
    <h3>You have accessed this website at ${res.content}</h3>
    `)
})

app.get('/api', timeLogger, (req,res)=>{
    res.send(`
    <h3>You have accessed this website at ${res.content}</h3>
    `)
})

app.get('/api/:type', timeLogger, checkObject, (req,res)=>{
    res.send(`
    <h3>You have accessed this website at ${res.content}</h3>
    `)
})



const server = http.createServer(app)
server.listen(3000,()=>{
    console.log('Listening at port 3000')
})