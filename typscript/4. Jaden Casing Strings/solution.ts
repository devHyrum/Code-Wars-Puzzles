String.prototype.toJadenCase = function (this: string): string{
    return this.split(' ').map((word)=> word.replace((word.slice(0,1)),(word.slice(0,1)).toUpperCase())).join(' ')
}


interface String {      // Declaration needed, don't remove it
  toJadenCase(): string;
}