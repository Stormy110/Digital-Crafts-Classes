const fs = require("fs")

fs.readFile("test.txt", "utf8", (err, data)=>{
    if(err) throw err;
    console.log(data)
})

fs.readFile("data.json", "utf8", (err, data)=>{
    if(err) throw err;
    let output = JSON.parse(data)
    output.forEach(person=>{
        console.log(`${person.name} is ${person.age} years old!`)
    })
})
