let altura = document.querySelector('#altura'), peso = document.querySelector('#peso'), IMC = document.querySelector('#IMC'), botaoCalcular = document.querySelector('#calcularIMC')
let CalcularIMC = () => {
    IMC.innerHTML = parseFloat(altura.value) / (parseFloat(peso.value) ** 2)
}
botaoCalcular.addEventListener('click', CalcularIMC)