let n = parseFloat(window.prompt("Digite um valor n."))
while(n < 0 || (n * 10) % 10 != 0){
    n = parseFloat(window.prompt("Valor inválido. Digite um numero positivo e inteiro"))
}
let impressao = (n) => {
    for(let i = 1;i < n;i++){
        for(let j = 1;j <= i;j++){
            console.log(i + "\t")
        }
        console.log("\n")
    }
}
console.log(impressao(n))