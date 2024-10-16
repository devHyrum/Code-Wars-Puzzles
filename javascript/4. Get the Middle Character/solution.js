function getMiddle(word){
    const isolateWords = word.split('')
    let newArray = []
    let indexMiddle = (isolateWords.length)/2
    if(isolateWords.length  % 2 === 0){
        newArray.push(isolateWords[indexMiddle-1],isolateWords[indexMiddle])
    } else if (isolateWords.length % 2 !== 0){
        newArray.push(isolateWords[parseInt(indexMiddle)])
    }
    let arrayFinal = newArray.join('')
    return arrayFinal
}
console.log(getMiddle('t'))