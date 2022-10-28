function calcularTabuada (){
    let imprimirTabuada = document.querySelector('#tabuada'), numero = document.querySelector('#numeroTabuada').value
    imprimirTabuada.innerHTML = ""
    for(let i = 0;i <= 10;i++){
        imprimirTabuada.innerHTML += (numero + " X " + i + " = " + (numero * i) + "<br>")
    }
}
