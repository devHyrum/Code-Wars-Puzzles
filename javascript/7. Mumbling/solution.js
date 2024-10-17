function accum(s) {
    const arraySeparado = s.toUpperCase().split('')
    let arraynew = []
    for (let index = 0; index < arraySeparado.length; index++) {
        const minusculas = ((arraySeparado[index].toLowerCase()).repeat(index))
        const juntar = arraySeparado[index].concat(minusculas)
        arraynew.push(juntar)
    }
    return arraynew.join('-')
}
console.log(accum("RqaEzty"))