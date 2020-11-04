/*function printSquare(size){
  let mySquare = "";
  for(let i = 0; i < size; i++){
      for(let j = 0; j < size; j++){
          mySquare += '*'
      }
      console.log(mySquare)
      mySquare=""
  }
}

printSquare(10)

// another option

function printSquare(size){
    let string = "*****\n";
    console.log(string.repeat(size));
}
printSquare(5)

// another option
*/
const printSquare = function(size){
    let s = "-".repeat(size)+'\n'
    console.log(s.repeat(size))
}
printSquare(8)