function printBanner(text){
    let l = text.length;
    let s = "";
    for(let i = 0; i <l+2;i++){
         s+="-"
        }
        console.log(s)
        console.log("-"+text+"-")
        console.log(s)
}

printBanner('Hello people')

// another solution

function printAgain(text){
    console.log("-".repeat(text.length+2)+"\n"+"-"+ text+"-\n"+"-".repeat(text.length+2))
}

printAgain("hello world")