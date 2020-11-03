/*let i = 1;
let sum = 0;
while (i <= 10) {
    sum += i;
    i++;
}
console.log(sum)


for(let j = 25; j <= 40; j++){
    console.log(j)
}


let number = 75;
for(let i = 6; i >= 2; i--){
    number /= i;
    console.log(number)
}
*/

let sum = 0;
for(let i = 0; i <= 200; i++){
    if(i % 2 == 0 || i % 3 == 0)continue;
    sum += i
    console.log(sum)
}
