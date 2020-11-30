const http = require("http");
const port = 5566
const addVisit = require("modules")
//below we are importing the functions from their file location
const generateContent = require("./modules/generateContent")
const serveFile = require("./modules/serveFile")


const server = http.createServer((req,res)=>{
    //below code checks if their is a favicon and css file and if so runs the functions servefile
    if(req.url == "/favicon.ico") return serveFile(req,res, req.url)
    if(req.url == "/styles.css") return serveFile(req,res, req.url)
    //sets status code
    res.writeHead(200);
    // creates the url object
    const url = new URL(req.headers.host+req.url) 
    // creates variables attached to search qeuries
    let page = url.searchParams.get("page")
    let count = url.searchParams.get("count")
    
    //creates a blank array and gives a value and name for each search parameter then adds it to the li item
    let additional = []
    url.searchParams.forEach((value,name) =>{
        additional.push(`<li>${name}:${value}</li>`)
    })
    // calls the generate content function
    let wrapper =  generateContent({
        page,
        count, 
        additional,
       
    })  
    //writes the wrapper to the response 
    res.write(wrapper)
    // ends the server call
    res.end()
})
// listens for the server
server.listen(port)

