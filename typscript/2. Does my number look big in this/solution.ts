export function narcissistic(value: number): boolean {
    if (value < 0){
        return false
    }
    const arrayPronto = (value.toString().split('')).map(Number)
    const result = (arrayPronto.map((i)=> i**(arrayPronto.length))).reduce((acc,curr) => acc + curr)
    return (result === value)
  }
  console.log(narcissistic(153))