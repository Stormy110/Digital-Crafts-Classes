const http = require('http');
const db = require("./db")
const hostname = '127.0.0.1';
const port = 3000;

const express = require('express');
const app = express();

const es6Renderer = require('express-es6-template-engine');
app.engine('html', es6Renderer);
app.set('views', 'templates');
app.set('view engine', 'html');

const server = http.createServer(app);
app.get('/', (req,res)=>{
    res.render('home',{
        locals: {
            title:'Address Book App'
        },
        partials: {
            head: '/partials/head'
        }
    })
})
app.get('/friends/:handle', (req,res)=>{
    const {handle} = req.params
    const friend = db.find(f=>f.handle === handle)
    if(friend){
        res.render('friend', {
            locals: {
                friend: friend,
                title: `${friend.name}'s info`
            },
            partials: {
                head: '/partials/head'
            }
        })
    } else {
        res.status(404).send(`no friend with handle ${handle}`)
    }
})
app.get('/friends', (req,res)=>{
    res.render('friends-list', {
        locals: {
            friends:db,
            path: req.path,
            title: 'Friends List'
        },
        partials: {
            head: '/partials/head'
        }
    })
})

server.listen(port,hostname, ()=>{
    console.log(`Running at http://${hostname}:${port}`)
})