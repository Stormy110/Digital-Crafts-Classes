function printBox(width,height){
    for(let i = 1; i < width; i++){
      for(let j = 1; j < height; j++){
          if(i == 1 || i == width -1 || j == 1 || j == height -1){
              console.log('*')
          } else {
              console.log(' ')
          }
        }
        console.log('\n')
    }
}
printBox(4,5)