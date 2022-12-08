let numeros = [], auxiliar
for(let i = 0;i < 10;i++){
    numeros[i] = parseFloat(prompt(`Digite o ${i + 1}º número`))
    for(let j = 0;j < i;j++){
        if(numeros[j] > numeros[i]){
            auxiliar = numeros[j]
            numeros[j] = numeros[i]
            numeros[i] = auxiliar
        }
    }
}
console.log("Os números digitados, em ordem crescente, são: ")
for(let i = 0;i < 10;i++){
    console.log(" " + numeros[i])
}
