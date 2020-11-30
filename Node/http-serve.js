// serve files from server
//Adding the ability to serve favicon.ico
const http = require("http");
const fs = require("fs")
const port = 5454

// server favicon function

const server = http.createServer((req,res)=>{

    if(req.url == `/favicon.ico`){

        return fs.readFile("./favicon.ico", (err,data) => {
            if (err) {
                res.writeHead(404);
                return res.end(JSON.stringify(err));
            }
            res.writeHead(200);
            res.end(data) //IMPORTANT res.end is inside this callback.
        })
    }

    const url = new URL(req.headers.host+req.url)
    

    let page = url.searchParams.get("page")
    let count = url.searchParams.get("count")

    let content = ""
    switch(page){
        case "about":
            content += `<h1>This is about!<h1>`;
            break;
        case "contact":
            content += `<h1>This is contact</h1>`;
            break;
        default:
            content += `<h1>This is Home</h1>`;
    }
    content += `<div>The Count is ${count || 0}</div>`

    res.write(content)
    res.end()
})

server.listen(port,()=>{
    console.log(`Running on Port ${port}`)
})
//You can move the file to a function
const http = require("http");
const fs = require("fs")
const port = 5454

const serveFavicon = (req,res)=>{
    fs.readFile("./favicon.ico", (err,data) => {
        if (err) {
            res.writeHead(404);
            // can just put res.end() instead of next line
            return res.end(JSON.stringify(err));
        }
        res.writeHead(200);
        res.end(data)
    })
}

const server = http.createServer((req,res)=>{
    if(req.url == `/favicon.ico`) return serveFavicon(req,res)
    const url = new URL(req.headers.host+req.url)
})