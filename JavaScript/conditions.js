// IF, ELSE, ELSE IF

let a = 10, b = 20, c = 30
//if statement
if(a == 10){
    console.log('a is 10')//not print
}
//if else statement
if(a == 16){
    console.log('a is 16')
} else {
    console.log('a is not 16')
}

//if else with multiple conditions
if(a == 10 && b == 10){
    console.log('both statements are true')
} else {
    console.log('at least one of the statements is not true')
}

//if else if else
if(a < 10){
    console('a is less than 10')
} else if (a < 20) {
    console.log('a is less than 20')
} else {
    console.log('a is larger than 20')
}

//nested if statements (please dont..like this)
if(a == 10){
    if(b == 20){
        if(c == 30){
            console.log('nesting to the third!')
        }
    }
}

//nested if statements with nested else
if(a == 10){
    if(b == 20){
        if(c != 30){
            console.log('I new c wasnt 30')
        } else {
            console.log('c must be 30')
        }
    }
}

// TERNARY

let a = 10

a == 10 ? 'yes!' : 'no' //yes!

//assign from the expression
let b = a == 20 ? 'yes!' : 'no'
console.log(b) //no

// SINGLE LINE

let i = 10;
//if you need to only do one thing this is 
//is an elegant solution
if(i > 5) console.log('do single thing')

// SWITCH

let a = 10

switch (a) {
    case 20:
        console.log('a is 20')
        break;
    case 15:
        console.log('a is 15')
        break;
    case 10:
        console.log('a is 10')
        break;
    default:
        console.log("I really don't know")
}

let number = 12 //random input from user
let output = null
switch(true){ //doing this compares to see if each expression is true
    case (number < 3):
        output = 'low'
        break;
    case (number < 7):
        output = 'med'
        break;
    case (number < 14):
        output = 'high'
        break;
    default:
        output = 'very high'
}
console.log(output)