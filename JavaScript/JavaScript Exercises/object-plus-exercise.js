function Cars() {}
let racecar = Cars()
racecar = new Cars()
console.log(racecar)
console.log(racecar instanceof Object)


console.log(racecar instanceof Array)

let myArr = [1,2,3,4,5]
console.log(myArr instanceof Array)
console.log(myArr.join('--'))