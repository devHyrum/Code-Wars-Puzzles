export const digitalRoot = (n:number):number => {
    const result = n.toString().split('').map(Number).reduce((acc, curr) => acc + curr)
    // if (result.toString().length === 1 ){
    //     return result
    // } else {
    //     return sumOfDigits(result)
    // }
    return result.toString().length === 1 ? result : digitalRoot(result)
};
console.log(digitalRoot(16))
console.log(digitalRoot(942))
console.log(digitalRoot(132189))
console.log(digitalRoot(493193))