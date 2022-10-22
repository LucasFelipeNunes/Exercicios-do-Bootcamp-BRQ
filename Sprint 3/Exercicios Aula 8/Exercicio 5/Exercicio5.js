
function converterFarenheit(){
    let tempCelsius = document.querySelector('#tempCelsius').value, tempConvFarenheit = document.querySelector('#tempConvFarenheit')
    tempConvFarenheit.innerHTML = "A temperatura convertida é: " + (tempCelsius * 1.8 + 32)
}
function converterCelsius(){
    let tempFarenheit = document.querySelector('#tempFarenheit').value, tempConvCelsius = document.querySelector('#tempConvCelsius')
    tempConvCelsius.innerHTML = "A temperatura convertida é: " + ((tempFarenheit - 32) / 1.8)
}