let numeros = [], aux
for(let i = 0;i < 10;i++){
    numeros[i] = parseFloat(prompt(`Exercício 7: Digite o ${i + 1}º número`))
    for(let j = 0;j < i;j++){
        if(numeros[j] > numeros[i]){
            aux = numeros[j]
            numeros[j] = numeros[i]
            numeros[i] = aux
        }
    }
}
console.log("Exercício 7: Os números digitados, em ordem crescente, são: ")
for(let i = 0;i < 10;i++){
    console.log(" " + numeros[i])
}
