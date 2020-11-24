const http = require("http")
const fs = require("fs")

const serveFavicon = (req,res)=>{
    fs.readFile("./favicon.ico", (err,data) => {
        if (err) {
            res.writeHead(404);
            res.end()
            // can just put res.end() instead of next line
            //return res.end(JSON.stringify(err));
        }
        res.writeHead(200);
        res.end(data)
    })
}
const serveCSS = (req,res)=>{
    fs.readFile("./styles.css", "utf8", (err,data) => {
        if (err) {
            res.writeHead(404);
            res.end()
            // can just put res.end() instead of next line
            //return res.end(JSON.stringify(err));
        }

        res.writeHead(200,{"Content-Type":"text/css"});
        res.end(data)
    })
}
const server = http.createServer((req,res)=>{
    res.setStatus = 200;
    
    if(req.url == `/favicon.ico`) return serveFavicon(req,res)
    if(req.url == '/styles.css') return serveCSS(req,res)
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
      
      let wrapper = `
      <!DOCTYPE html>
      <html>
        <head>
            <title>My Selection:${page}</title>
            <link rel="stylesheet" href="styles.css" type="text/css">
            
        <body>
            <nav>
                <span><a href="?page=home">Home</a></span>
                <span><a href="?page=contact">Contact</a></span>
                <span><a href="?page=about">About</a></span>
            </nav>
            ${content}
        </body>
      </html>
      `

      res.write(wrapper)
      res.end()
})

server.listen(5567,()=>{
    console.log('Running on Port 5567')
})