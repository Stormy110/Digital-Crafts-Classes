let wholeBody = document.querySelector('body')
let header = document.createElement('h1')
header.append('This is the header')
wholeBody.append(header)
let bigList = document.createElement('ul')
for(let i = 0;i < 4; i++){
    let l = document.createElement('li')
    l.append('This is an item')
    bigList.append(l)
}
wholeBody.append(bigList)
let par = document.createElement('p')
par.append('this is a paragraph')
wholeBody.append(par)
wholeBody.style = "font-family:cursive;background:black;color:white;"
header.style = 'border:solid 1px red'
bigList.style = 'border:solid 1px red'