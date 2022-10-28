let nomes = []
for(let i = 0;i < 5;i++)
{
    nomes[i] = parseFloat(prompt(`Digite o ${i + 1}º nome para ser guardado`))
}
let nomeFoiEncontrado = false, nomeProcurado = parseFloat(prompt("Agora, digite o nome para ser procurado"))
for(let i = 0;i < 5;i++)
{
    if(nomes[i] == nomeProcurado){
        nomeFoiEncontrado = true
    }
}
if(nomeFoiEncontrado == true){
    console.log("ACHEI")
}
else{
    console.log("NÃO ACHEI")
}
