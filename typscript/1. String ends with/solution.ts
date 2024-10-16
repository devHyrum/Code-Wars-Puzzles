export function solution(str: string, ending: string): boolean {
    const newArrayA = Array.from(str).slice(str.length-ending.length)
    return (JSON.stringify(newArrayA) === JSON.stringify(Array.from(ending)))
  }
// I didn't know about the '.endsWith' method on a string. It would be easier: return str.endsWith(ending);
// If the exercise ask me for a output 'string', the variables input should be 'string'