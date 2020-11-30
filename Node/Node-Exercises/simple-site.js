const http = require("http")

const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Node Practice</title>
</head>
<body>
    <h1>This is a website</h1>
    <ul>
    </ul>
    <script>
        fetch("http://localhost:5566/")
        .then(res=>res.json())
        .then(data=>{
            data.forEach(person=>{
                let li = document.createElement('li')
                li.innerText = 
                let ul = document.querySelector('ul')
                ul.append(li)
            })
        })
        .catch(err=>console.log(err))
    </script>

</body>
</html>`

const server = http.createServer((req,res)=>{
    res.writeHead(200, {
        "Content-Type":"text/html",
        "Access-Control-Allow-Origin":"*"
    })
    res.end(htmlContent)
})

server.listen(8888, ()=>{
    console.log("running on port 8888")
})