let nota = [], media = 0
for(let i = 0;i < 10;i++){
    nota[i] = parseFloat(window.prompt("Digite a nota " + (i + 1) + " do aluno"))
    media += nota[i]/10
}
window.alert("A média aritmética das notas é " + media)