for(let i = 1; i<=100; i++){
    console.log(i)
}

function cowSay(string){
    console.log('The cow says ' +string)
}
cowSay('mooooo')
cowSay('rooooaaarrr!')
cowSay('hello sir')

let people = [{name:"batman", powers:"none"}, {name:"iron man", power:"rich"}, {name:"The Hulk", powers:"being green"}, {name:"Superman", powers:"Being an Alien"}]
function getName(item) {
    let fname = (item.name)
    console.log(fname)
}
let newPeople = people.map(getName)
