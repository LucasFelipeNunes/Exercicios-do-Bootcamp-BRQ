let numero1 = prompt("Informe o primeiro número"), numero2 = prompt("Informe o segundo número"), numero3 = prompt("Informe o terceiro número")
let maiorNumero = ((n1, n2, n3) => {
    return (n1 > n2) ? (n1 > n3) ? n1 : n3 : (n2 > n3) ? n2 : n3
})
window.alert("O maior valor digitado é " + maiorNumero(numero1, numero2, numero3))