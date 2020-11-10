// exercise 1

const letters = ['a','b','c','d','e']
const numbers = [1,5,8,3,6,9,12]
let numFirst = [...numbers, ...letters]
let letFirst = [...letters, ...numbers]
console.log(numFirst)
console.log(letFirst)

// exercise 2

const cars = [
    {
        make:"Chevy",
        model:"Corvette",
        year:2019
    },
    {
        make:"Ford",
        model:"Mustang",
        year:2018
    },
    {
        make:"Tesla",
        model:"Model 3",
        year:2020
    },
    {
        make:"GMC",
        model:"h2",
        year:2010
    }
]

let newCar = {
        make:"Ferrari",
        model:"coupe",
        year:2010
}
let newCar2 = {
        make:"NASA",
        model:"shuttle",
        year:2015
}
let newCars = [...cars, newCar, newCar2]
console.log(newCars)

let oldCars = newCars.filter(car=>car.year < 2018)
console.log(oldCars)

let fordFocus = {
    make:"Ford",
    model:"Focus",
    year:2010
}
let updated = [fordFocus, ...newCars]
console.log(updated)

let updated2 = [...cars].sort((a,b)=>a.year - b.year)
console.log(updated2)
console.log(cars)