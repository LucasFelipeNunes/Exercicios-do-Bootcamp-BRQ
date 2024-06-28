let ultimoNumero = 1, penultimoNumero = 1
console.log("Exercício 10: Os 15 primeiros números da sequência de Fibonacci são: 1, 1, ")
for(let i = 3;i < 15;i++){
    numero = ultimoNumero + penultimoNumero
    console.log(numero)
    penultimoNumero = ultimoNumero
    ultimoNumero = numero
}