function moveZeros(arr){
    const filterWithoutZero = arr.filter((i) => i !== 0)
    const allZeros = arr.filter((i) => i === 0)
    return filterWithoutZero.concat(allZeros)
    
}
console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]))