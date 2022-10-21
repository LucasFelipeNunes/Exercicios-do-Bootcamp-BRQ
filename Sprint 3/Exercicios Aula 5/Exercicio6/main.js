let numero1 = parseInt(window.prompt("Digite o primeiro número")), numero2 = parseInt(window.prompt("Digite o segundo número")), numero3 = parseInt(window.prompt("Digite o terceiro número"))
let maiorNumero = ((numero1, numero2, numero3) => { 
    return ((numero1 > numero2) ? ((numero1 > numero3) ? numero1 : numero3) : ((numero2 > numero3) ? numero2 : numero3))
})
let menorNumero = ((numero1, numero2, numero3) => {
    return (numero1 < numero2) ? ((numero1 < numero3) ? numero1 : numero3) : ((numero2 < numero3) ? numero2 : numero3)
})
console.log(`O maior numero digitado foi ${maiorNumero(numero1, numero2, numero3)} e o menor foi ${menorNumero(numero1, numero2, numero3)}`)