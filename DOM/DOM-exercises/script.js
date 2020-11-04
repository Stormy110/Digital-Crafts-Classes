let bigList = document.createElement('ul')
let main = document.querySelector('#main-content')
for(let i = 0; i < 6; i++){
    let l = document.createElement('li')
    l.append(`This is item ${i}`)
    bigList.append(l)
}
main.append(bigList)