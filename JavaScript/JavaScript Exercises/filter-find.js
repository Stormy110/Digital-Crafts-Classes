const todos = [
    {
        id: 1,
        status:'complete',
        todo: 'clean bathroom',
        deadline: new Date('08/29/1991').getTime()
    },
    {
        id: 2,
        status:'in-progress',
        todo: 'bathe dog',
        deadline: new Date('08/29/2021').getTime()
    },
    {
        id: 3,
        status:'in-progress',
        todo: 'brush teeth',
        deadline: new Date('08/29/2016').getTime()
    }, 
    {
        id: 4,
        status:'todo',
        todo: 'grocery shopping',
        deadline: new Date('08/29/2011').getTime()
    },
    {
        id: 5,
        status:'complete',
        todo: 'exercise',
        deadline: new Date('08/29/1999').getTime()
    },
    {
        id: 6,
        status:'todo',
        todo: 'wash dishes',
        deadline: new Date('08/29/2995').getTime()
    },
]

let completed = todos.filter(item=>item.status == 'complete')
console.log(completed)
let toDoNow = todos.find(item=>item.status == 'todo')
console.log(toDoNow)
let progress = todos.filter(item=>new Date (item.deadline).getTime() < Date.now() && item.status !== 'complete')
console.log(progress)
