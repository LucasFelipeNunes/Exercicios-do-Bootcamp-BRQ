let argumentos = []
for(let i = 0;i < 3;i++){
    argumentos[i] = parseFloat(prompt(`Digite o ${i + 1}º argumento`))
}
console.log("A soma dos argumentos é " + somaArgumentos(argumentos[0], argumentos[1], argumentos[2]) + " e a sua média é " + mediaArgumentos(argumentos[0], argumentos[1], argumentos[2]))
function somaArgumentos(arg1, arg2, arg3){
    let soma = arg1 + arg2 + arg3
    return soma
}
function mediaArgumentos(num1, num2, num3){
    let media = somaArgumentos(num1,num2,num3) / 3
    return media
}