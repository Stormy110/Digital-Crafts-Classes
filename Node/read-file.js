//fs is the file system
const fs = require("fs")

// reading a file
fs.readFile("stuff.json", 'utf8', (err, data)=>{
    if(err) throw err;
    console.log(JSON.parse(data))
    let output = JSON.parse(data)
    output.map((value,index)=>console.log(`The item number ${index} is ${value}`))
})

let data = fs.readFileSync("stuff.json","utf8")
console.log(JSON.parse(data))