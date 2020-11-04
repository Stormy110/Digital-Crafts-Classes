let header = document.querySelector('h1')
console.log(header)
console.dir(header)
header.style = 'border-bottom:1px solid' // setting the style sttribute

let ideas = document.querySelectorAll('.child-idea')

let stylestring = 'background:red;font-size:2em;font-weight:bold'

ideas.forEach(function(idea, idx){
    idea.style = stylestring
}) // can only usde for each because its using queryselector

header.style = 'color:green' // this changes the whole style sttribute

// you can change individual attributes

header.style.color = "green" // because it is an object you use dot notation to access keys

//header.style.border-bottom = "4px dashed purple" // does not work, need to change border-bottom to borderBottom

header.style.fontFamily = 'sans-serif'

// setting the whole style 
//set the style attribute
let header = document.querySelector("h1")
header.style = "border-bottom:1px solid;"
//changing several styles
let header = document.querySelector("h1")
header.style = "border-bottom:1px solid; text-align:right; color:#446699;"
//seting several different items
let ideas = document.querySelectorAll(".child-idea")
let styleString = "background:red;font-size:2em;font-weight:bold;"
ideas.forEach(function(idea, idx){
    idea.style = styleString
})
//writting the style attribute completely overides any styles written inline
let header = document.querySelector("h1")
header.style = "border-bottom:1px solid;"

header.style = "color:green" //no underline