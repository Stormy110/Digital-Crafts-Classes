let ships = [
    {
        name:'Dragon',
        topSpeed:9,
        acceleration:7,
        cargoCapacity:4
    },
    {
        name:'Sea Horse',
        topSpeed:8,
        acceleration:8,
        cargoCapacity:2
    },
    {
        name:'Firefly',
        topSpeed:10,
        acceleration:6,
        cargoCapacity:1
    },
]
console.log(ships[1].name, ships[1].topSpeed)

ships.forEach(function(ship){
    console.log('**********')
    for(key in ship){
        console.log(` ${key} : ${ship[key]}`)
    }
})

ships.sort(function(a,b){
    return b.topSpeed - a.topSpeed
})//.reverse() will reverse the order
console.log(ships)