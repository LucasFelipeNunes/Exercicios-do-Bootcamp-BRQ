var numeroInteiro = parseInt(prompt("Exercício 10: Digite um número")), contadorDigitos = 0, auxiliar = 0
if(numeroInteiro > 0){
    while(numeroInteiro > auxiliar){
        contadorDigitos++
        auxiliar = 10 ** contadorDigitos
    }
}
else if(numeroInteiro < 0){
    while(numeroInteiro < auxiliar){
        contadorDigitos++
        auxiliar = -(10 ** contadorDigitos)
    }
}
else{
    contadorDigitos = 1
}
console.log("Exercício 10: Este número tem " + contadorDigitos + " dígitos")
