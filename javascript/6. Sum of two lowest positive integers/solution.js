function sumTwoSmallestNumbers(numbers) {  
    numbers.forEach(i => {
        if (i < 0){
            throw new Error('Não é permitido negativos')
        } else if (!Number.isInteger(i)){
            throw new Error('Não é permitido decimais')
        }
    })
    let arrayOrdenado = numbers.sort((a, b) =>  a - b)
    return arrayOrdenado[0] + arrayOrdenado[1]
  }
console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]))