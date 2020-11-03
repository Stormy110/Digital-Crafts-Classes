function addThreeItems(a,b,c){
    return a+b+c
}
console.log(addThreeItems(14,67,84))

// or 
const myFunc = function(a,b,c){
    return a+b+c
}
let res = myFunc('I', ' am ', 1)
console.log(res)




// anonymous function practice

const nextFunc = function(subFunc, aNumber){
    for(let i = 0; i <= aNumber; i++){
        console.log(i)
    }
    subFunc()
}
nextFunc(function(){
    console.log('Yeehaw')
}, 20)
nextFunc(function(){
    console.log('yessir')
}, 50)