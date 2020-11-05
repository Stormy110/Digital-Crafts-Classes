
let button = document.querySelector('.button')


button.onclick = function(evt){
    button.style.backgroundColor = 'purple'
}


let clickFun = function(evt){
    evt.target.classList.toggle('highlight')
    evt.target.nextElementSibling.classList.toggle('hidden')
}
let titles = document.querySelectorAll('.title')

titles.forEach(function(title){
    title.onclick = clickFun
    title.nextElementSibling.classList.add('hidden')
})