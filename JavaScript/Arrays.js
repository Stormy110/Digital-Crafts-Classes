// CREATING ARRAYS

//create empty array
let myArr = [] 
//create array with items
let myArr = ['a','b','c']

//accessing via index
console.log(myArr[1]) //b

// MODIFYING ARRAYS

let myArr = ['a','b','c']

//push adds to the end
myArr.push('d')
console.log(myArr)

//removes the last item and returns the moved item
let removed = myArr.pop()
console.log(removed)
console.log(myArr)

//adds to the front of an array
myArr.unshift('z')
console.log(myArr)

//add multiple
myArr.unshift('x','y')
console.log(myArr)

//removes from the front
let firstItem = myArr.shift()
console.log(firstItem)
console.log(myArr)

// LOOPING THROUGH ARRAYS


//old school way
let myArr = ['a','b','c','d','e']
for(let i = 0; i <  myArr.length; i++){
    console.log(myArr[i])
}
//while can be use similerly but is almost never used
//another usage of for
let myArr = ['a','b','c','d','e']
for(letter of myArr){
    console.log(letter)
}