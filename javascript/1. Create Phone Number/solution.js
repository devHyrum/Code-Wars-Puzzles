function createPhoneNumber(numbers){
    if(numbers.length !== 10){
        throw new Error('Informação inválida: o array precisa ter 10 números')
    }
    const primeiraParte = (numbers.slice(0,3)).join('')
    const segundaParte = ((numbers.slice(3,6))).join('')
    const terceiraParte = ((numbers.slice(6))).join('')
    return `(${primeiraParte}) ${segundaParte}-${terceiraParte}`
}
console.log(createPhoneNumber([1,2,3,4,5,6,7,8,9,0]))

// or we can use this method:
const phoneNumber = numbers.join('');
return phoneNumber.replace(/^ (\d{3})(\d{3})(\d{4}) $/, '($1) $2-$3')
// /^       -> Start of string
// $/       -> End of string
// (\d{3})  -> Indicates that It's taking the first three elements
// (\d{3})  -> Continues getting the next number
// $1       -> It's a representacion of (\d{3})

// Although I liked this last solution:
return numbers.join('').replace(/(...)(...)(.*)/, '($1) $2-$3');
// It uses the same structure