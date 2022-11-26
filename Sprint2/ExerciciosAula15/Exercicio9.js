var argumento = parseFloat(prompt("Digite um número"))
console.log(PN(argumento))
function PN(numero){
    let caractere
    if(numero > 0){
        caractere = 'P'
    }
    else{
        caractere = 'N'
    }
    return caractere
}
