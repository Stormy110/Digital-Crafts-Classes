console.log('This is a console log')
console.log('another one')
console.log([{name:'Ian', age:29}, 15, 'hello'])

let paragraphs = document.getElementsByTagName('p')
console.log(paragraphs)

let ideas = document.getElementsByClassName('child-idea')
console.log(ideas)

//let main = document.getElementById('main-idea')
//console.log(main)

//query selector using css identifiers 
let heading = document.querySelector('h1')
console.log(heading)
let main = document.querySelector("#main-idea") // id
let idea = document.querySelector(".child-idea") // class
let notHere = document.querySelector("#not-here") //not in document

//query selector for all
let ideas1 = document.querySelectorAll(".child-idea")
console.log(ideas1)
console.dir(ideas1)
ideas1.forEach(function(idea){
    console.log(idea)
})