function Gerar(){
    let palavra = document.querySelector('#palavra').value, palavraInvertida = document.querySelector('#palavraInvertida')
        palavraInvertida.innerHTML = palavra.split("").reverse().join("")
}