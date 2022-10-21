let n = parseFloat(window.prompt("Digite um numero positivo e inteiro"))
while(n < 0 || (n * 10) % 10 != 0){
    n = parseFloat(window.prompt("Valor inválido. Digite um numero positivo e inteiro"))
}
let verificaPrimo = ((numero) => {
    for(let j = 2;j < numero;j++){
        if(numero % j == 0){
            return false;
        }
    }
    return true;
})
console.log("Os numeros primos entre 1 e o numero digitado n são:")
for(let i = 2;i < n;i++){
    if(verificaPrimo(i) == true){
        console.log(` ${i}`)
    }
}