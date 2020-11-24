const http = require("http")
const server = http.createServer((req,res)=>{
    res.setStatus = 200;
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
        <head><title>My Selection:${page}</title></head>
        <body>${content}
        </body>
      </html>
      `

      res.write(content)
      res.end()
})

server.listen(5566,()=>{
    console.log('Running on Port 5566')
})