function imprimirUsuarios () {
    let nome = document.querySelector('#nome').value, idade = document.querySelector('#idade').value, usuarios = document.querySelector('#usuarios'), enviar = document.querySelector('#Enviar')
    usuarios.innerHTML += nome + "<br><br>" + idade + "<br><br>"
}