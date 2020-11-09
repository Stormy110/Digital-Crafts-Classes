// array.map creates a new array that is the same length as the previous array
// Simple Usage

let letters = ["a","b","c","d"]
let letterPlus = letters.map(function(letter){
    return letter+letter
})
console.log(letters)
console.log(letterPlus)

//another example
let letterObj = letters.map(function(letter,idx){
    return {
        name:letter,
        index:idx,
        letterIdx : letter+idx
    }
})

console.log(letterObj)
// Map will always produce an array of the same length as the source array.


// UNDEFINED ISSUE

let numbers = [6,1,3,4,3,5,5,10]
//function has a conditional return
//let increased = numbers.map(function((num, idx){
//    if(num > numbers[idx-1]) return num;
//})
//console.log(increased)
// Maps put the return of the callback function in the spot of the index of the source array in the new array. If it doesn't have a return it puts in undefined.

// common usage

let family = [
    {
        name:"clint",
        age:38
    },
    {
        name:"Anna",
        age:37
    },
    {
        name:"Olivia",
        age:11
    },
    {
        name:"Alle",
        age:9
    },
    {
        name:"Mark",
        age:9
    }
]
// you should not be modifying the oroginal array using map
//returns just names
let justNames = family.map(function(member){
    return member.name
})

//you will almost always use arrow functions 
//yea! implicit returns
let justNames1 = family.map(member=>member.name)
//you should not update the array in the map function
let updated = family.map((member)=>{
    member.surName = "Fleetwood"
    return member
})
console.log(updated)
// accidently updating objects this can lead to bugs
console.log(family)
//better way ... create a new object
let updated1 = family.map((member)=>{
    let newMember = {}
    for(key in member){
        newMember[key] = member[key]
    }
    newMember.surName = 'Fleetwood'
    return newMember
})
console.log(updated1)
console.log(family)//no change

