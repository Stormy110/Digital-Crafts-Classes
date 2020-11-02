// WHILE LOOPS

let i = 1;

while(i < 10){
    console.log(i)
    i++
}
console.log(i)

while(i > 0){
    console.log(i)
    //you could do anything here
    i--
}
//Infinate loops in the browser will cause the world to end. 
//Friends don't let friends infinate loop in the browser

// FOR LOOPS

//initial value; condition; incrimenter 
for(let i = 0; i < 10; i++){
    console.log(i)
}

//optional leave out initial value
let i = 1
for(; i<20; i++){
    console.log(i)
}


// BREAK

let i = 0;
while(i < 10){
    if(i > 5) break;//breaks the loop
    console.log(i)
    i++
}
//leaving out the condition ..infintate loop
for(let i = 0;;i++){
    if(i > 10) {
        break;
    }
    console.log(i)
}


// CONTINUE

for(let i = 0;i<20;i++){
    if(!(i % 2)) continue;
    console.log(i)
}
//infinite loop warning!
let i = 0;
while(i < 10){
    if(i % 2 == 0) continue;//why infinite loop?
    console.log(i)
    i++
}
