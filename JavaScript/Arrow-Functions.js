// implicit return - In javascript implicit return is when a value is returned 
// from a function or operation without using the return keyword.

//Creating an arrow function

//written different
const myArrowFunc = (foo)=>{
    console.log(foo)
}
//called the same way
myArrowFunc('got some data for ya')
//returning and arguments
const returnStuff = (arg)=>{
    return 'stuff'+arg
}
console.log(returnStuff('something'))

//Arrow Function Condensed

//single argument can be used with out ()
const onlyOneArg = someArg => {
    console.log(someArg)
}
onlyOneArg('yup it works')
//implicit return
const simple = ()=>'This string is returned' 
console.log(simple())

//more useful example
const xTimesX = x=>x*x //implicit return
let res = xTimesX(12)
console.log(res)

// Arrow Functions as an argument/callback

const doSomething = function(callback){
    console.log('I did something')
    callback()
}

doSomething(()=>{
    console.log('The function is finished and now it is my turn')
})

//condensed callback
let myArr = ['a','b','c','d']
myArr.forEach((letter,idx)=>console.log(letter, idx))