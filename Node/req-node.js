const http = require("http")
const server = http.server((req,res)=>{
    console.log(req)
    res.end()
})
server.listen(5566, ()=>{
    console.log('running on port 5566')
})