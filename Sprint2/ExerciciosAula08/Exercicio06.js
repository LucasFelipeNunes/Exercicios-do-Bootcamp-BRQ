let idade3 = parseInt(window.prompt("Exercício 6: Digite a idade do nadador"))
window.alert("Exercício 6: Este nadador se encaixa " + ((idade3 < 5) ? "em nenhuma categoria." : ("na categoria " + ((idade3 <= 10) ? "infantil" : (idade3 <= 18) ? "juvenil" : "adulto"))))