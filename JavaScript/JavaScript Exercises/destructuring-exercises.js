// exercise 1

let myArr = [100,250,500,750]
let [a,b,c,d] = myArr
console.log(a)
let [,second,,] = myArr
console.log(myArr)
console.log(second)
let [first, ...rest] = myArr
console.log(first,second,rest)


// exercise 2

const ship = {
    name:'S.S. Booty',
    age: 750,
    speed: 10,
    acceleration: 5,
    color: 'black',
    passengers: 100
}

let {name,age} = ship
console.log(name,age)
let {acceleration} = ship
console.log(acceleration)
let {speed} = ship


let {age: ship_age, speed: ship_speed} = ship
console.log(ship_age,ship_speed)
console.log(ship)
console.log(age)