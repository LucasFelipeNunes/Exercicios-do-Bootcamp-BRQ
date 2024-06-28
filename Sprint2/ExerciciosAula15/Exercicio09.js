var argumento = parseFloat(prompt("Exercício 9: Digite um número"))
console.log("Exercício 9: " + PN(argumento))
function PN(numero){
    let caractere = (numero > 0) ? 'P' : 'N'
    return caractere
}
