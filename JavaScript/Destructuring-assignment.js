//Destructuring - In javascript destructuring is unpacking an array or object to assign the values unpacked to variables.

// Array

/* Looks odd but [x,y] is not an actual array it is assigning the variables */
let [x,y] = [20, 30]
console.log(x)
console.log(y)

//you do not need everything
let me = ["Clint", 29, "clint@digitalcrafts.com", 160]
let [name,age] = me
console.log(name,age)

// you can also leave out some items
let [name,age,,weight] = me
console.log(name,age,weight)

// Using Rest Syntax
//rest of the items returned as an array
let [x,y, ...rest] = [20, 30, 40, 50]
console.log(x,y,rest)

//rest is not a keyword
let [x,y, ...foo] = [20, 30, 40, 50]
console.log(x,y,foo)

// Objects

let me = {name:"Clint", age:29, email:"clint@digitalcrafts.com"}

// A pattern you will see in react ... a LOT
//Grabs the keys and assigns a variable to that named key
const {name,age, email} = me
console.log(name,age,email)

//just like with arrays you do not need to destructure all the parts
const {name} = me
//this is helpful if the object is large and you only need a few parts.
