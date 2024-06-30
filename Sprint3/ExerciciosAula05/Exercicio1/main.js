let massaMorango = parseFloat(window.prompt("Digite a massa de morangos comprada"))
let massaMaca = parseFloat(window.prompt("Digite a massa de maçãs comprada"))
let preco = ((massaMorango <= 5) ? (massaMorango * 2.5) : (massaMorango * 2.2)) + ((massaMaca <= 5) ? (massaMaca * 1.8) : (massaMaca * 1.5))
massaTotal = massaMorango + massaMaca
if(preco >= 25 || massaTotal > 8){
    preco *= 0.9
}
console.log(`O preço a ser pago é ${preco}`)
