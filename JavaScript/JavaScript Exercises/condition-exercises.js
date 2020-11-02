let value = 5;
if (value == 10){
    console.log("value is 10")
} else if (value == 5){
    console.log('value is 5')
} else {
    console.log('value is unknown')
}


let result = 10;
result > 15 ? 'higher': 'lower'


let temp = 45;
let color = null;
switch(true) {
    case (temp < -20):
        color = 'darkblue';
        break;
    case (temp < -10):
        color = 'blue';
        break;
    case (temp < 0):
        color = 'lightblue';
        break;
    case (temp < 30):
        color = 'green';
        break;
    case (temp < 60):
        color = 'red';
        break;
    case (temp < 70):
        color = 'orange';
        break;
    case (temp < 90):
        color = 'yellow';
        break;
    default:
        console.log('pick a new temp')
}
console.log(color)