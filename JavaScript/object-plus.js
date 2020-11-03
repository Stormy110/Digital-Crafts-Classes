//Everything is an object?

//In javascript everything is (or at least can be) an object. Even Strings, Numbers, Booleans. Don't sweat it its odd but it doesn't have to be confusing.
console.log(typeof 'yes') //string
console.log(typeof new String('yes')) //object

let myString = 'yes'
let anotherString = new String('yes')
console.log(myString)
console.log(anotherString)
console.log(myString.length)
console.log(anotherString.length)

console.log(new String('yes') instanceof Object)


function test(){}

console.log(typeof test) //function
test instanceof Object //true

//Functions are objects. We call them first class objects in javascript.


// CREATING INSTANCE WITH NEW

function Animal() {}
let rainbow = Animal() //undefined 
//Animal as a function doesn't return anything

//creating an instance
rainbow = new Animal()
console.log(rainbow) //instance of Animal

//THIS

function Animal(type,name) {
    this.name = name;
    this.type = type;
}
let shadow = new Animal('cat', 'shadow')
console.log(shadow)
//adding methods
function Animal(type,name, noise) {
    this.name = name;
    this.type = type;
    this.noise = noise;
    this.makeNoise = function(){
        console.log(this.name+' says '+this.noise)
    }
}

let shadow = new Animal('cat', 'shadow', 'meow')
console.log(shadow)
shadow.makeNoise()


//PROTOTYPE

function Animal(type,name,noise) {
    this.name = name;
    this.type = type;
    this.noise = noise;        
}

Animal.prototype.makeNoise = function(){
    console.log(this.name+' says '+this.noise)
}



//READING MDN

  //look on the leftand side

  Array.from() //called on the actual object not an instance
  Array.prototype.forEach() //called on the instances of an array