//middleware example
const http = require("http")
const express = require('express')
const app = express()

const sendHome = (req,res)=>{
    console.log("This is sendhome")
    res.send(`<h1>Some content ${requestTime}</h1>`)
}

const timeLogger = (req,res,next)=>{
    let requestTime = new Date()
    console.log("A request came in at "+requestTime)
    req.requestTime = requestTime
    res.content = requestTime
    next()
}

const addOneToCount = (req,res,next)=>{
    req.count = req.count ? req.count+1:1;
    next()
}

app.get('/',timeLogger,addOneToCount,addOneToCount,addOneToCount,addOneToCount,addOneToCount,sendHome)


const checkId = (req,res,next)=>{
    if(req.params.id.length <= 4) return res.send("ID are at least 5 long.")
    next()
}

app.get("/api/people/:id", checkId, (req,res)=>{
    console.log('Id is long enough')
    res.send("I can send the person here")
})