// initializing button variable as the class button html items
let button = document.querySelector('.button')
// initializing a variable num 
let num = 0
// creating a function that will increase the num every click
const funct1 = function(evt){
    num++//increases the num every click
    console.log(num)// adds the num amount to the console
    button.innerHTML = num//adds the html item num to cfhange in the page
    if(num >= 10){
        button.style.backgroundColor = 'green'
        evt.target.removeEventListener("click",funct1)
    }
}
button.addEventListener('click', funct1)

let body = document.querySelector('.body')
/*const funct2 = function(evt){
    body.onscroll = function(){
        body.style.backgroundImage = 'linear-gradient(to bottom,red,blue)'
    }
}
body.addEventListener('scroll',funct2)
*/
var scrollBefore = 0;

window.addEventListener('scroll',function(e){
    const scrolled = window.scrollY;

    if(scrollBefore > scrolled){
        console.log("ScrollUP");
        scrollBefore = scrolled;
        body.style.backgroundImage = 'linear-gradient(red,blue)'
    }else{
        scrollBefore = scrolled;
        console.log("ScrollDOWN");
        body.style.backgroundImage = 'linear-gradient(blue,red)'
    }

})