let valor = [], valoresMenoresQue8 = [], aux = 0
for(let i = 0;i < 10;i++){
    valor[i] = parseFloat(window.prompt("Digite um valor da posição " + (i + 1)))
    if(valor[i] < 8){
        valoresMenoresQue8[aux] = valor[i]
        aux++
    }
}
window.alert("Os valores menores que 8 digitados são: " + valoresMenoresQue8)