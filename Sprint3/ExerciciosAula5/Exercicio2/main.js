let primeiroNumero = parseFloat(window.prompt("Digite o primeiro numero"))
let segundoNumero = parseFloat(window.prompt("Digite o segundo numero, diferente de zero"))
do{
    segundoNumero = parseFloat(window.prompt("Valor invalido. Digite o segundo numero, diferente de zero"))
}while(segundoNumero == 0)
window.alert(`A divisao do primeiro pelo segundo numero lido resulta em ${primeiroNumero / segundoNumero}`)