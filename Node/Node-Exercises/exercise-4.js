const http = require("http")
const htmlContent = ` 
<!DOCTYPE html>
<html>
    <head>
        <title>Favorite Foods</title>
    </head>
    <body>
        <h1>These are my favorite foods!</h1>
        <ul>
            <li>Pasta</li>
            <li>Queso</li>
            <li>Chicken Wings</li>
        </ul>
        <script>
            console.log("This is my hidden message!")
        </script>
    </body>
</html>`
const server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.end(htmlContent)
})

server.listen(3366, ()=>{
    console.log("Listening on port 3366")
})