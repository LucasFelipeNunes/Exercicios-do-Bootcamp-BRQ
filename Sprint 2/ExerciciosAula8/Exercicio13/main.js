let valor = [], valorVezes2 = []
for(let i = 0;i < 15;i++){
    valor[i] = parseFloat(window.prompt("Digite um valor"))
    valorVezes2[i] = valor[i] * 2
}
window.alert("Os valores multiplicados por 2 são: " + valorVezes2)