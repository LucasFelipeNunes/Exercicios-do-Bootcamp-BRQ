function buscarCEP(){
    let cep = parseInt(document.querySelector('#cep').value), listaCidades = document.querySelector('#listaCidades')
    fetch('https://viacep.com.br/ws/' + cep + '/json/')
    .then(response => response.json())
    .then(dados => listaCidades.innerHTML += dados.localidade + "<br><br>")
}