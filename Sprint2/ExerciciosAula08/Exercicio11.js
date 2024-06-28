let nota = [], media3 = 0
for(let i = 0;i < 10;i++){
    nota[i] = parseFloat(window.prompt("Exercicio 11: Digite a nota " + (i + 1) + " do aluno"))
    media3 += nota[i]/10
}
window.alert("Exercicio 11: A média aritmética das notas é " + media3)