// DECLARING  FUNCTION

//Not much different from python
function doSomething(){
    console.log('I can do something')
}
doSomething()
// return value
function doAnotherThing(){
    return 'I did something else'
}
let randNum = doAnotherThing()
// arguments
function someArgs(myNumber, anotherNumber){
    return myNumber / anotherNumber
}
someArgs(2,4)
//argument missmatch
function foo(bar1,bar2,bar3){
    if(!bar3) bar3 = 0
    //bar3 = bar3 || 0
    return bar1 + bar2 + bar3
}
foo(1,2)//no error


// ANONYMOUS FUNCTIONS

//assigning it to a variable    
let myFunc = function(someArg){
    console.log('Im anonymous', someArg)
}
myFunc('Do it')
//anonymous as an argument
function hasArgumentFunction(argFunction){
    console.log('I have a function as an arg')
    argFunction()
}

hasArgumentFunction(function(){
    console.log('Ok this is ok')
})
//how they are different
//This Works
callBeforeDeclared()

function callBeforeDeclared(){
    console.log('Do something')
}
//This doesn't work
anonCalled() //error

let anonCalled = function(){
    console.log('You cannot do this')
}