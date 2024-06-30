let qtdDentroIntervalo = 0, numeros = [10]
for(let i = 0;i < 10;i++){
    numeros[i] = parseFloat(window.prompt(`Digite o valor da posição ${i} do vetor`))
    if(numeros[i] >= 10 && numeros[i] <= 20){
        qtdDentroIntervalo++
    }
}
window.alert(`Dentre os números digitados, ${qtdDentroIntervalo} estão dentro do intervalo [10,20] e ${10 - qtdDentroIntervalo} estão fora dele.`)