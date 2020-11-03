function totalAmount(total,service){
    if(service == 'good'){
        return total * .20 + total
    } else if (service == 'fair'){
        return total * .15 + total
    } else {
        return total * .1 + total
    }
}
console.log(totalAmount(75,'good'))