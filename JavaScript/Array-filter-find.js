// use filter


let numbers = [5,3,-10,300,-21,78,-54,-1,8]
let positive = numbers.filter(num=>num > 0)//filter returns a new array of all items that returned true
console.log(positive)//filter only cares if the argument is true or false

// filter always returns an array and for each item if the function returns true, 
// that item is added to the new array

bigNumbers = numbers.filter(num=>num > 100)
console.log(bigNumbers) //[] empty array
//common usage
let ships = [
    {
        type:"freighter",
        name:"falcon"
    },
    {
        type:"fighter",
        name:"xwing"
    },
    {
        type:"bomber",
        name:"ywing"
    },
    {
        type:"fighter",
        name:"tie-fighter"
    }
]

let fighters = ships.filter(ship=>ship.type == "fighter")
console.log(fighters)
// filter is not designed to modify the item as it is added. It is designed to simply filter out items from the array.

// Filter->Map

 //ships from above
 let figherNames = ships.filter(ship=>ship.type == "fighter").map(ship=>ship.name)

 //sometimes look like this... but is the same thing
let fighterNames = ships
.filter(ship=>ship.type == "fighter")
.map(ship=>ship.name)

// the above code is very common
 // Find
console.log(fighterNames)
numbers = [5,3,-10,300,-21,78,-54,-1,8]
let a = numbers.find(num=>num == 8)
let d = numbers.find(num=>num == 3)
console.log(a,d)
// find ALWAYS returns 1 item or undefined


numbers = [5,3,-10,300,-21,78,-54,-1,8]
let more = numbers.find(num=>num > 5)

// If there is more than one item it only returns the first item.
