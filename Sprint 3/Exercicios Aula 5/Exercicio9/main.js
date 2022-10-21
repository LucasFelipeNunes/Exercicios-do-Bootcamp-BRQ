let numero = parseFloat(window.prompt("Digite um número inteiro."))
while((numero * 10) % 10 != 0){
    numero = parseFloat(window.prompt("Valor inválido. Digite um numero inteiro."))
}
let qtdDigitos = ((n) => {
    let umDigito = false, contador = 0;
    while(!umDigito){
        if(n - 10 < 0){
            umDigito = true
        }
        contador++;
        n /= 10;
    }
    return contador;
})
console.log(`A quantidade de digitos do numero e ${qtdDigitos(numero)}`)