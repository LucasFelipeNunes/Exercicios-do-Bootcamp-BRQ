let salario = 1, numeroFilhos = qtdPessoas = mediaSalario = mediaNumeroFilhos = maiorSalario = qtdSalariosAbaixoDe1000 = 0;
for(let i = 0;salario > 0;i++){
    salario = parseFloat(window.prompt(`Digite o salário da pessoa ${i + 1} (digite um valor negativo para encerrar)`))
    if(salario >= 0){
        numeroFilhos = parseInt(window.prompt(`Digite a quantidade de filhos da pessoa ${i + 1}`))
        qtdPessoas++;
        mediaSalario += salario / qtdPessoas
        mediaNumeroFilhos += numeroFilhos / qtdPessoas
        maiorSalario = (salario > maiorSalario) ? salario : maiorSalario
        qtdSalariosAbaixoDe1000 += (salario < 1000) ? 1 : 0
    }
}
window.alert(`a) A média de salário da população é ${mediaSalario}\nb) A média do número de filhos da população é ${mediaNumeroFilhos} por habitante\nc) O maior salário dos habitantes é ${maiorSalario}\nd) O percentual de pessoas com salario maior que 1000 é ${qtdSalariosAbaixoDe1000 / qtdPessoas * 100}%`)
