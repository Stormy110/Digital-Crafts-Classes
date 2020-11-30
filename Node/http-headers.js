// What are http headers?
// used to pass info to and ffrom client and server
// The most common ones we deal with as developers are "Content-Type", "Authentication", "Access-Control-Allow-Origin". (We will go over Authentication later)

// adding headers to response

const http = require("http")
const server = http.createServer((req,res)=>{
    res.statusCode = 200;

    res.setHeader("X-Foo-Header", "RandomData/Random");
    res.setHeader("X-My-Header-Not-Real", "MoreRandom")
    res.end("Sent. Check the network!")
})

server.listen(5566,()=>{
    console.log(`Running on Port ${5566}`)
})



const server = http.createServer((req,res)=>{
//You can combine the status and set headers as an object with res.writeHead
    res.writeHead(200, {
    "X-Foo-Header":"RandomData/Random",
    "X-My-Header-Not-Real":"MoreRandom"
})
    res.end("Sent. Check the network!")
})


//CONTENT-TYPE HEADER
const http = require("http")
const server = http.createServer((req,res)=>{
    res.writeHead(200, {
    "Content-Type":"text/html"
})
//You can write to the response before sending/ending
    res.write("<div>This is a div</div>")
    res.end()
})

server.listen(5566,()=>{
    console.log(`Running on Port ${5566}`)
})


//tells browser not to interpret html
res.writeHead(200, {
    "Content-Type":"text/plain"
})

//Send JSON data Explicitly
const ships = [
    {
        name:"x-wing",
        type:"fighter"
    },
    {
        name:"tie-fighter",
        type:"fighter"
    },
    {
        name:"y-wing",
        type:"bomber"
    }
];

res.writeHead(200, {
    "Content-Type":"application/json"
})
res.write(JSON.stringify(ships))

// CORS HEADERS
// Node on one port
const http = require("http")
const server = http.createServer((req,res)=>{
   res.writeHead(200, {
        "Content-Type":"application/json"
    })
    res.write('["a","b","c"]')
    res.end()
})
server.listen(5566,()=>{
    console.log(`Running on Port ${5566}`)
})

/*<!-- HTML content served on port 8888-->
  
  <!DOCTYPE html>
  <html lang="en">   
  <script>
      fetch("http://localhost:5566")
      .then(res=>res.json())
      .then(data=>console.log(data))
      .catch(err=>console.log(err))
  </script>
  </body>
  </html>
  */
//Because of CORS specifications, this will produce a CORS error. The Server needs to be able to tell the browser that content is expected to be viewed on another domain.



//This is useful if you have a front-end app being served from a different port than the backend app or api
res.writeHead(200, {
    "Content-Type":"application/json",
    "Access-Control-Allow-Origin":"http://localhost:8888"
    //I can access the site from localhost:8888, but nowwhere else
})



//This is useful if you want top make a public api
res.writeHead(200, {
    "Content-Type":"application/json",
    "Access-Control-Allow-Origin":"*"
    //I can access the site from anywhere
})