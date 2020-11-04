// create element

let content = document.createElement("div")
let bigList = document.createElement("ul")
let someText = document.createElement("p")
//These items are created but not added yet.

// add element to parent

let main = document.querySelector("main")
main.append(content,bigList)

for(let i = 0; i < 6; i++){
    bigList.append(document.createElement('li'))
}

let section = document.createElement("section")
let sectionHeader = document.createElement("h2")
section.append(sectionHeader)
//Appends the section header. It is still not part of the DOM
//section.appendChild was the older way

main.append(section) //adds to main. It is now in the document.

//append can also just use a string