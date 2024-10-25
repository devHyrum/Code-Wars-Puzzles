type RomanNumeralMap = { [key: number]: string}
const ROMAN_NUMERALS: RomanNumeralMap = {
    1: 'I',
    2: 'II',
    3: 'III',
    4: 'IV',
    5: 'V',
    6: 'VI',
    7: 'VII',
    8: 'VIII',
    9: 'IX',
    10: 'X',
    20: 'XX',
    30: 'XXX',
    40: 'XL',
    50: 'L',
    60: 'LX',
    70: 'LXX',
    80: 'LXXX',
    90: 'XC',
    100: 'C',
    200: 'CC',
    300: 'CCC',
    400: 'CD',
    500: 'D',
    600: 'DC',
    700: 'DCC',
    800: 'DCCC',
    900: 'CM',
    1000: 'M',
    2000: 'MM',
    3000: 'MMM'
};

export function solution(number: number): string {
    if (number < 1 || number > 3999) {
        throw new Error('Número não permitido: só é aceitável de 1 entre ao 3999');
      }
    const formatadoParaNumber = number.toString().split('').map((i)=> Number(i))
    let arraynew: any = []
    for (let index = 0; index < formatadoParaNumber.length; index++) {
        const element = formatadoParaNumber[index]* (10**(formatadoParaNumber.length-index-1));
        arraynew.push(element)
    }
    return arraynew.map((i:any)=> ROMAN_NUMERALS[i]).join('')
  }

console.log(solution(1990))
console.log(solution(2008))
console.log(solution(1666))
console.log(solution(1))
console.log(solution(1000))