function printBox(width,height){
    console.log(' - '.repeat(width));
    for (let i = 1; i < height; i++){
        console.log("| " + " ".repeat(width-2))
    }
    console.log(" - ".repeat(width))
}
printBox(4,5)

