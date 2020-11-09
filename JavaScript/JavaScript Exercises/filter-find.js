const todos = [
    {
        id: 1,
        status:'complete',
        todo: 'clean bathroom',
        timestamp: new Date('08/29/1991').getTime()
    },
    {
        id: 2,
        status:'in-progress',
        todo: 'bathe dog',
        timestamp: new Date('08/29/2020').getTime()
    },
    {
        id: 3,
        status:'in-progress',
        todo: 'brush teeth',
        timestamp: new Date('08/29/2016').getTime()
    }, 
    {
        id: 4,
        status:'todo',
        todo: 'grocery shopping',
        timestamp: new Date('08/29/2011').getTime()
    },
    {
        id: 5,
        status:'complete',
        todo: 'exercise',
        timestamp: new Date('08/29/1999').getTime()
    },
    {
        id: 6,
        status:'todo',
        todo: 'wash dishes',
        timestamp: new Date('08/29/1995').getTime()
    },
]

let completed = todos.filter(item=>item.status == 'complete')
console.log(completed)
let toDoNow = todos.find(item=>item.status == 'todo')
console.log(toDoNow)
let progress = todos.filter(item=>item.status == 'in-progress')
console.log(progress)
