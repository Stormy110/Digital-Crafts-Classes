function printSquare(size){
  let mySquare = "";
  for(let i = 0; i < size; i++){
      for(let j = 0; j < size; j++){
          mySquare += '*'
      }
      console.log(mySquare)
      mySquare=""
  }
}

printSquare(4)