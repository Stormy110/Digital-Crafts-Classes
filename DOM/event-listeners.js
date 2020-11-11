// adding event listeners

const func1 = function(){
    console.log('function1 was fired')
}
const func2 = function(){
    console.log('function2 was fired')
}
let button = document.querySelector("#more-info")
button.onclick = func1
//add another
button.onclick = func2
//only function 2 is fired but i want both!

const func3 = function(){
    func1()
    func2()       // this is not the correct way but it works
}
//same as above but add these event listeners

button.addEventListener("click", func1)
button.addEventListener("click", func2)
// you can add as many event listeners and as many events as you want

// the window will commonly have eventlisteners

console.log('Gonna load the DOM')
window.addEventListener("DOMContentLoaded", function(evt){
    console.log('THE DOM HAS BEEN LOADED!')
})


// removing event listeners

const someFunc = function(evt){
    console.log('Fire this event')
}

button.addEventListener("click", someFunc)
button.removeEventListener("click", someFunc)

// the following function will count how many times you scroll
let scrollAmount = 0
const scrollFunc = function(){
    console.log(scrollAmount)
    scrollAmount++;
    if(scrollAmount > 30){
        window.removeEventListener('scroll', scrollFunc)
    }
}

window.addEventListener('scroll', scrollFunc)


//same button
const func1 = function(evt){
    console.log('I need to be fired only once')
    //remove the listener
    evt.target.removeEventListener("click",func1)
}
const func2 = function(){
    console.log('function2 was fired, and can be over and over')
}

button.addEventListener("click", func1)
button.addEventListener("click", func2)


//Cannot remove listener created on the fly.
button.addEventListener("click", function(){
    console.log('This cannot be removed')
})

window.addEventListener("scroll", function(){
    //even though this looks the same, it is a different function
    button.removeEventListener('click',
    function(){
        console.log('This cannot be removed')
    })
})


// dispatching custom events

 //Not used extensivly on day-to-day
  // but it is interesting and can be useful in 
  // unique circumstances
  window.addEventListener("jump", function(){
    let newDiv = document.createElement("div")
    newDiv.append("Chris Cross gonna make you Jump, Jump!")
    document.body.append(newDiv)
})

let myInterval = setInterval(function(){
    window.dispatchEvent(new Event("jump"))
}, 3000)