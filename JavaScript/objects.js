let myObj = {}

let newObject = {
    name:'Ian',
    age:29,
    tall: true
}
// how to call a value form an object
console.log(newObject["name"])

let search = "age"
console.log(newObject[search])

//you can also use dot notation

console.log(newObject.name, newObject.age, newObject.tall)

//how to change values

newObject.name = "Sasha"
console.log(newObject.name)

// add a new key

newObject.gender = "Male"
console.log(newObject)

// delete a value

delete newObject.tall
console.log(newObject)

// looping through an object
// key can be any word , its just to signify a key in an object
for(key in newObject){
    if(!newObject.hasOwnProperty(key)) continue;//you will see this line regularly, but its ok to loop without this line
    console.log(key, newObject[key])
}