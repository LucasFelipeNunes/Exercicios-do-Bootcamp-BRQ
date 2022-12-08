var argumento = parseFloat(prompt("Digite um número"))
console.log(PN(argumento))
function PN(numero){
    let caractere = (numero > 0) ? 'P' : 'N'
    return caractere
}
