let valor2 = [], valoresMenoresQue8 = [], aux = 0
for(let i = 0;i < 10;i++){
    valor2[i] = parseFloat(window.prompt("Exercicio 15: Digite um valor da posição " + (i + 1)))
    if(valor2[i] < 8){
        valoresMenoresQue8[aux] = valor2[i]
        aux++
    }
}
window.alert("Exercicio 15: Os valores menores que 8 digitados são: " + valoresMenoresQue8)