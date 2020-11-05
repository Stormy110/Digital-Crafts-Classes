// EVENT OBJECT
let myEvent = new Event('random')
console.log(myEvent)

window.onresize = function(evt){
    console.log(evt)//the event object is passed!
    // you cna do more things here
}

// SETTING HTML attribute
let clicked = 0
let button = document.querySelector('#more-info')
button.classList.add('btn')
console.log(button)

button.onclick = function(evt){
    clicked++
    button.innertext = clicked
}

let color = 254
let body = document.querySelector('body')
//again the browser passes the event to the function
body.onscroll = function(evt){
    body.style.background = `rgb(${color}, ${color}, ${color})`
    color--
    color = color < 0 ? 0 : color
}

let profilePic = document.createElement('img')

profilePic.onload = function(evt){
    console.log('image loaded')
}
console.log('attempting to load image')
profilePic.src='google.com'//or the site
console.log('image has began loading')

//EVENT TARGET

//event target
let button = document.querySelector("#more-info")
button.onclick = function(event){
    console.log(event.target)
}
//no need to set a variable
document.querySelector("#more-info").onclick = function(evt){
    console.log(evt.target)
    evt.target.classList.toggle("primary")
}
//using a single function on multiple items
let ideas = document.querySelectorAll(".child-idea")
const toggleBackground = function(evt){
    evt.target.classList.toggle("primary")
}
ideas.forEach(function(idea){
    idea.onclick = toggleBackground
})