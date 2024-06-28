let nomes = []
for(let i = 0;i < 5;i++)
{
    nomes[i] = parseFloat(prompt(`Exercício 4: Digite o ${i + 1}º nome para ser guardado`))
}
let nomeFoiEncontrado = false, nomeProcurado = parseFloat(prompt("Exercício 4: Agora, digite o nome para ser procurado"))
for(let i = 0;i < 5;i++)
{
    if(nomes[i] == nomeProcurado){
        nomeFoiEncontrado = true
    }
}
if(nomeFoiEncontrado == true){
    console.log("Exercício 4: ACHEI")
}
else{
    console.log("Exercício 4: NÃO ACHEI")
}
