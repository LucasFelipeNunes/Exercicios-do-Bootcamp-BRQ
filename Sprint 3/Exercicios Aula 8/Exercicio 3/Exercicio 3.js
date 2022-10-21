let altura = document.querySelector('#altura'), peso = document.querySelector('#peso'), IMC = document.querySelector('#IMC'), botaoCalcular = document.querySelector('#calcularIMC')
let CalcularIMC = () => {
    return IMC.innerHTML = parseFloat(peso.value) / parseFloat(Math.pow(altura.value / 100, 2))
}
botaoCalcular.addEventListener('click', CalcularIMC)