export function comp(a1: number[] | null, a2: number[] | null): boolean {
    if (!a1 || !a2) return false;
    if (a1.length !== a2.length) return false;
    const arrayA = a1.map((i)=> Math.pow(i,2)).sort((a,b)=>a-b)
    const arrayB = a2.sort((a,b)=>a-b)
    return arrayA.every((val, index) => val === arrayB[index])
}
const primer = [121, 144, 19, 161, 19, 144, 19, 11]
const segundo = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
console.log(comp(primer, segundo))
const segundoInvalido = [12441, 14641, 20736, 361, 25921, 361, 20736, 361];
console.log(comp(primer, segundoInvalido));