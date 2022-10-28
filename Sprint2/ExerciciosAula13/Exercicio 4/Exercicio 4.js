let altura = 1.80, sexo = 'M'
if(sexo == 'M'){
    console.log(`O IMC desta pessoa é ${(72.7 * altura) - 58}`)
}
else if(sexo == 'F'){
    console.log(`O IMC desta pessoa é ${(62.1 * altura) - 44.7}`)
}
else{
    console.log("Sexo inválido")
}