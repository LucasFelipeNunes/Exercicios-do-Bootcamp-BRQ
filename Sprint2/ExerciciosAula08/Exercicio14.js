let numero = [], soma = 0
for(let i = 0;i < 10;i++){
    numero[i] = parseFloat(window.prompt("Exercicio 14: Digite o número da posição " + (i + 1)))
    soma += numero[i]
}
window.alert("Exercicio 14: A soma total dos números lidos é " + soma)