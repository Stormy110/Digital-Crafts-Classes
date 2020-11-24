const fs = require("fs")
const serveFile = (req, res)=>{
    fs.readFile("."+fileName, (err, data)=>{
        if(err){
            res.writeHead(404)
            res.end()
        }
        res.end(data)
    })
}

module.exports = serveFile