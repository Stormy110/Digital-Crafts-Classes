const http = require("http");
const express = require("express");
const app = express();
const people = require("./people.json")

const server = http.createServer(app)

app.get('/', (req,res)=>{
    res.send(`
    <h1>Hello Weary Traveler</h1>
    `)
})

// this will send all of the people
app.get('/api/people', (req,res)=>{
    res.send(people)
})


app.get('/api/people/gender/:gender',(req,res)=>{
    const {gender} = req.params
    const foundGender = people.filter(person=>person.gender == gender)
    res.send(foundGender)
})

app.get('/api/people/email/:email',(req,res)=>{
    const {email} = req.params
    const foundEmail = people.find(person=>person.email == email)
    res.send(foundEmail)
})
server.listen(3000, ()=>{
    console.log('Serving at port 3000')
})