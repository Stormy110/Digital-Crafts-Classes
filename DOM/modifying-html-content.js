// APPEND

let main = document.querySelector("main")
let p = document.createElement("p")
p.append("This is the text in the paragraph")

let p2 = document.createElement("p")
p2.append("Some additional text")

main.append(p, p2)



// innerText

let header = document.querySelection("h1")
header.innerText = "Look a new title"

let mainIdea = document.querySelector("#main-idea")
mainIdea.innerText = "<div>Im going to be trixy here</div>"
//Not what I was expecting

// createTextNode

let mainIdea = document.querySelector("#main-idea")
let text = document.createTextNode("This is the new text")
//this is a node
mainIdea.append(text)


// InnerHTML

let wholeBody = document.body //yup you can do this
wholeBody.innerHTML = `
<div>
    <h1>Wow I have changed everything</h1>
    <ul>
        <li>Yes</li>
        <li>I</li>
        <li>Did</li>
</div>
`;
//this is normally not prefered but can be used sometimes.