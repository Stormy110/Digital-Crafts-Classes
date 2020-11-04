let myList = [
    {
        url:'www.google.com',
        id:'google-link',
        text:'This is the google site'
    },
    {
        url:'www.espn.com',
        id:'espn-link',
        text:'This is the espn site'
    },
    {
        url:'www.cnn.com',
        id:'cnn-link',
        text:'This is the cnn site'
    },
]
let wholeBody = document.querySelector('body')
let bigList = document.createElement('ul')
wholeBody.append(bigList)

myList.forEach(function(item){
    let a = document.createElement('a')
    a.href = item.url;
    a.innerText = item.text
    let l = document.createElement('li')
    l.append(a)
    bigList.append(l)
})