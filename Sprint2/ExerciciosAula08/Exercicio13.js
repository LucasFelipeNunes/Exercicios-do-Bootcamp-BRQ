let valor = [], valorVezes2 = []
for(let i = 0;i < 15;i++){
    valor[i] = parseFloat(window.prompt("Exercicio 13: Digite um valor"))
    valorVezes2[i] = valor[i] * 2
}
window.alert("Exercicio 13: Os valores multiplicados por 2 são: " + valorVezes2)