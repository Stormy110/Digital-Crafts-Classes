`string 
with
breaks
inside
`
//can span multiple lines. HTML output the literal spaces.

//templete strings (template literals)
//like python fstrings but no f and only used with `
let a = "Awesome"
let b = "Super"
console.log(`the letter a = ${a} and b is ${b}`)

//Advanced Functionality

let myName = "Clint"
let output = `Is ${myName} longer than 6 ? ${myName.length>6 ? 'YES!': 'No'}`
console.log(output)
//Using ternery inside
let myArray = [{name:"Clint"}, {name:"Anna"}, {name:"Olivia"}]

let output1 = `
My Family names are :
\n
${myArray.map(p=>p.name).join("\n")}
And some others.
` 
console.log(output1)

let myFunc = function(){
    return 'This is ok'
}

console.log(`this is .....${myFunc()}`)