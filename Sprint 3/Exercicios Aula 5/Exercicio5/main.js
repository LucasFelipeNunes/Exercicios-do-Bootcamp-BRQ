let A = [10], i = 0
while(i < 10){
    A[i] = parseFloat(window.prompt(`Digite o valor da posição ${i} do vetor A`))
    i++;
}
i = 0;
let X = parseFloat(window.prompt(`Digite um número X`)), M = [10]
console.log("Os números do vetor M são:")
while(i < 10){
    M[i] = A[i] * X
    console.log(" " + M[i])
    i++;
}
