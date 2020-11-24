const http = require("http")
const myArr = [
    {
        "firstName":"Ian",
        "lastName":"Storms",
        "email":"IanStorms110@yahoo.com"
    },
    {
        "firstName":"Molly",
        "lastName":"Mcloughlin",
        "email":"Mollymoomoo@yahoo.com"
    },
    {
        "firstName":"Sasha",
        "lastName":"Svirshch",
        "email":"SashaWasha@yahoo.com"
    },
]

const server = http.createServer((req,res)=>{
    res.writeHead(200, {
        "Content-Type":"application/json",
        "Access-Control-Allow-Origin":"*"
    })
    res.write(JSON.stringify(myArr))
    res.end()
})

server.listen(5566, ()=>{
    console.log("Running on port 5566!")
})