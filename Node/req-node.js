//Read the req object
const http = require("http")
const server = http.server((req,res)=>{
    //a huge objec t with a lot of info
    console.log(req)
    console.log(req.headers, req.url)
    res.end()
})
server.listen(5566,()=>{
    console.log("running on port 5566")
})

// read the query string
const http = require("http")
const server = http.server((req,res)=>{
    
    //constructing the url object
    const url = new URL(re.headers.host + req.url)

    //the querystring is found in the url.searchParams object
    let searchObj = url.searchParams;
    console.log(searchObj)
    
    //foreach is a bit different
    url.searchParams.forEach((value,name)=>{
        console.log(value,name)
    })
    // dont use loops or foreach if you can

    //USE THIS MORE
    //if we know what we are looking for we can use get
    let page = url.searchParams.get("page")
    console.log(page)
    res.end()
})
server.listen(5566, ()=>{
    console.log('running on port 5566')
})

//sending content based on query
const server = http.createServer((req,res)=>{
      
    res.setStatus = 200;

    //constructing the url object
    const url = new URL(req.headers.host+req.url) 

    //if we know what we are looking for we can use get

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