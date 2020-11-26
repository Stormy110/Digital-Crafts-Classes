const fs = require("fs")

let cars = [
    {
        "name":"mercedes",
        "speed":150,
        "year":2020
    },
    {
        "name":"ferrari",
        "speed":200,
        "year":2017
    },
    {
        "name":"ford",
        "speed":120,
        "year":2010
    },
]
fs.writeFile("cars.json",JSON.stringify(cars),"utf8",(err)=>{
    if(err) throw err;
    console.log("The file has been added.")
})

const addCar = (newCar)=>{
    cars.push(newCar)
    fs.writeFile("cars.json",JSON.stringify(newCar),"utf8",(err)=>{
        if (err) throw err;
        console.log("The new file has been added")
    })
}

let newCars = [
    {
    "name":"lamborgini",
    "speed":220,
    "year":2015
},
{
    "name":"mclaren",
    "speed":230,
    "year":2019
}
]


addCar({"name":"lamborgini","speed":220,"year":2015})