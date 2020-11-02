//STRINGS

"bob"

'joe'

`string with
breaks
inside`

//can add strings to numbers and just is a string
console.log(1+'bob')
a = 10
b = 'none'
c = '10'
let tryAgain = a + b
let tryAnother = a+c
console.log(tryAgain, tryAnother)

//templete strings (template literals)
//like python fstrings but no f and only used with `
console.log(`the letter a = ${a} and b is ${b}`)

//properties
console.log("This is nice".length)

//get character
console.log("123"[1])
console.log("123".charAt(2))

//string methods
console.log("Hey".toLowerCase())
console.log("Another String".replace(" ", "!!!!"))
//a lot more methods

//Numbers

//both floats and ints are number types in js
1
345
23.42
-23.452342
-1
0

//all mathmatic operations are allowed
let res = 1+2

//number methods
10.1233331.toFixed(2) //10.12

// 13312333123.toExpotential(2) //doesnt work?
let myNum = 13312333123
myNum.toExpotential(3) //works

//BOOLEAN

true
false

isGood = true
isBad = false

console.log(isGood+'yeah')

//UNDEFINED

let b;

console.log(b) //undefined
console.log(c) //error

//a function that returns nothing returns undefined