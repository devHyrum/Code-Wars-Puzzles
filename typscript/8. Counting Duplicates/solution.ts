export function duplicateCount(text: string): number {
    const charCounts: { [key: string]: number } = {};
    let duplicates = 0;

    for (let char of text.toLowerCase()) {
      charCounts[char] = (charCounts[char] || 0) + 1;
    }
  
    for (const count of Object.values(charCounts) as number[]) {
      if (count > 1) {
        duplicates++;
      }
    }
  
    return duplicates;
  }
  console.log(duplicateCount('Indivisibilities'))