function preencherCampos(){
    let cep = document.querySelector('#cep').value, estado = document.querySelector('#estado'), cidade = document.querySelector('#cidade'), bairro = document.querySelector('#bairro'), endereco = document.querySelector('#endereco')
    fetch('https://viacep.com.br/ws/' + cep + '/json/')
    .then(response => response.json())
    .then(dados => {
        estado.value = dados.uf
        cidade.value = dados.localidade
        bairro.value = dados.bairro
        endereco.value = dados.logradouro
    })
}
document.querySelector('#cep').addEventListener('keydown', (event) => 
{
    if(event.key == "Tab"){
        preencherCampos()
    }
})