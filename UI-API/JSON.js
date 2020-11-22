let myJSONArray = '["string1", "string2", "string3"]'
//all string values in json require double quotes.

let moreJSONArray = '[7, false, true, 42, "more text"]'
//numbers and booleans do not require double quotes

let myJsonObject = `{
    "name":"Clint",
    "age":39,
    "email":"clint@digitalcrafts.com"
}`
//JSON objects are more like python dictonaries. They require the key to have double quotes.

let arrayOfObjectJSON = `[
    {
        "name":"Clint",
        "age":39,
        "email":"clint@digitalcrafts.com"
    },
    {
        "name":"Anna",
        "age":37,
        "email":"anna@noneya.com"
    },
    {
        "name":"Olivia",
        "age":11,
        "email":"olivia@noneya.com"
    }
]`
//Arrays and objects are allowed to be nested in JSON


//PARSING JSON

// myJSONArray, moreJSONArray,myJsonObject,arrayOfObjectJSON from above

let realArray = JSON.parse(myJSONArray)
console.log(realArray) //array of strings

// array of additional items
console.log(JSON.parse(moreJSONArray)) 

//real js object
console.log(JSON.parse(myJsonObject))

//js array of objects
let famArray = JSON.parse(arrayOfObjectJSON)
//invalid json
/*
let notValid = '[notAVariable, "this is ok though']'
JSON.parse(notValid) //syntax error

let notValid2 = '{keyNotWrapped:"the key isnt wrapped"}'
JSON.parse(notValid2) // syntax error*/



//CREATING JSON FROM JS

let myArray = [1,3,4,5]
  let jsonArry = JSON.stringify(myArray)
  //just a string

  let jsonObjString = JSON.stringify({
      name:"Clint",
      age:39,
      email:"clint@digitalcrafts.com"
  })
  //still just a string
  let myObj = {
      coolFunc:()=>console.log('lets see'),
      a:"10",
      b:[
          "string",{
              someKey:"key is good"
          }
      ],
      anotherFunc:()=>console.log('another func')
  }
  console.log(JSON.stringify(myObj))
  //Functions and other things that JSON cannot turn into a string are ignored.