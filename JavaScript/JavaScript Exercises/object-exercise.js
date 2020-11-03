let spaceship = {
    speed:7,
    acceleration:8,
    passengers:2,
    fuel:6
}

spaceship.payload = 4
console.log(spaceship)
spaceship.fuel /= 3
console.log(spaceship.fuel)

for(key in spaceship){
    console.log(key,":", spaceship[key])
}

