function buscarCEP(){
    let rua = document.querySelector('#rua').value, listaCEPs = document.querySelector('#listaCEPs'), estado = document.querySelector('#estado').value, cidade = document.querySelector('#cidade').value
    if(rua != ""){
        fetch('https://viacep.com.br/ws/' + estado + '/' + cidade + '/' + rua + '/json/')
        .then(response => response.json())
        .then(dados => listaCEPs.innerHTML += dados.cep + "<br><br>")
        .then(dados => console.log(dados.cep))
    }
}