const fs = require("fs")
fs.writeFile("paragraph.txt","Hello peanut wigglebutt","utf8",(err)=>{
    if(err) throw err;
    console.log("The file has been added.")
})