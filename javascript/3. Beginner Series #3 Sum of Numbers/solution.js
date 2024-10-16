
function getSum(a, b){
    let menor = a
    let maior = b
    if(a > b){
        menor = b
        maior = a
    }
    let somafinal = 0
    for(let startnumber = menor; startnumber <= maior; startnumber++){
        somafinal += startnumber
    }
    return somafinal;
}
console.log(getSum(3,3))