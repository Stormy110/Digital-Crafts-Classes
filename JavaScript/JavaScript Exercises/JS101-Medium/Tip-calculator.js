function tipAmount(total, serviceLevel){
    if(serviceLevel == 'good'){
        return total * .20
    } else if (serviceLevel == 'fair'){
        return total * .15
    } else {
        return total * .1
    }
}

console.log(tipAmount(75,'good'))