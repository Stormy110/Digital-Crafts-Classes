import {objArr} from './object-array.js'

export let createCard = ()=>{
    objArr.forEach(function(card){
        let body = document.querySelector('body')
        let div = document.createElement('div')
        let title = document.createElement('h1')
        let content = document.createElement('p')
        let footer = document.createElement('footer')
        title.innerHTML = card.title
        content.innerHTML = card.content
        footer.innerHTML = 'This is the bottom'
        div.append(title,content,footer)
        body.append(div) 
    })
}


