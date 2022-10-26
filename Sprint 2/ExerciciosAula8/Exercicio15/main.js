let media = parseFloat(window.prompt("Digite a média de aproveitamento"))
window.alert("O conceito do aluno é " + ((media >= 9) ? "A" : (media >= 7.5) ? "B" : (media >= 6) ? "C" : "reprovado"))