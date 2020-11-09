// exercise 1
const cars = [
    {
        name: "Jeep",
        speed: 7,
        passengers: 5
    },
    {
        name: "Motorcycle",
        speed: 10,
        passengers: 2
    },
    {
        name: "Mercedes",
        speed: 9,
        passengers: 4
    },
    {
        name: "Van",
        speed: 5,
        passengers: 6
    },
]
const carNames = cars.map(car=>car.name)
console.log(carNames)

//exercise 2

const todos = [
    {
        id: 1,
        status:'complete',
        todo: 'clean bathroom'
    },
    {
        id: 2,
        status:'in-progess',
        todo: 'bathe dog'
    },
    {
        id: 3,
        status:'in-progress',
        todo: 'brush teeth'
    }, {
        id: 4,
        status:'todo',
        todo: 'grocery shopping'
    },
]
let toDoStatus = todos.map(item=>item.status)
console.log(toDoStatus)

uniqueStatus = []
toDoStatus.forEach(stat=>{
    if(uniqueStatus.indexOf(stat) > 0){
        uniqueStatus.push(stat)
    }
})
console.log(uniqueStatus)
/*
let results = uniqueStatus.map(stat=>{
    let newObj = {
        toDoStatus:stat,
        items:[]
    }
    todos.forEach(todo=>(if(todo.status == stat){
        newObj.items.push
    }))
})*/