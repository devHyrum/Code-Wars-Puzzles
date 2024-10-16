function vamosElevarEsteNumero(valor){
    const valorEmString = valor.toString();
    const novoarray = valorEmString.split('').map(Number)
    const numerosElevados = novoarray.map((cadaNumero) => cadaNumero**2)
    const uniaoDeTudo = numerosElevados.join('')
    return Number(uniaoDeTudo) //Também podemos colocar 'return +uniaoDeTudo
}
console.log(vamosElevarEsteNumero(864351))
// We have other method:
// return +num.toString().split('').map(i => i*i).join('');