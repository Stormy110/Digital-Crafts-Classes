// adding/modifying attributes

let main = document.querySelector("main")
main.id = "main-item"
console.log(main)

let a = document.createElement("a")
a.innerText = "This is an awesome link"
a.href = "http://www.google.com"
main.append(a)
//Set Attribute
let picture = document.createElement("img")
picture.setAttribute("src","https://www.imagesource.com/wp-content/uploads/2019/06/Rio.jpg")
picture.setAttribute("alt", "Pretty picture of rio")
main.append(picture)