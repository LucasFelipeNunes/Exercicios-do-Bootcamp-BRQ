let Q = [], maiorNumero, posicaoMaiorNumero
for(let i = 0;i < 10;i++)
{
    Q[i] = parseFloat(prompt(`Digite o ${i + 1}º número par para ser guardado`))
    while(Q[i]%2 != 0){
        Q[i] = parseFloat(prompt("O número digitado não é par, por favor digite outro"))
    }
    if(i == 0 || Q[i] > maiorNumero){
        maiorNumero = Q[i]
        posicaoMaiorNumero = i
    }
}