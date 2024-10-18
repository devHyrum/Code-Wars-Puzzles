export function reverseWords(str: string): string {
    const arraySepate = str.split(' ')
    const newArray : any = []
    arraySepate.forEach(i => {
        const separate = (Array.from(i).reverse()).join('')
        newArray.push(separate)
    });
    return newArray.join(' ')
}
console.log(reverseWords("This is an example!"))