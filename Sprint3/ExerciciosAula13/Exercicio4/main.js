let nome = [document.querySelector('#nome4'), document.querySelector('#nome5'),document.querySelector('#nome6')], peso = [document.querySelector('#peso4'), document.querySelector('#peso5'),document.querySelector('#peso6')], altura = [document.querySelector('#altura4'), document.querySelector('#altura5'),document.querySelector('#altura6')], tipo = [document.querySelector('#tipo4'), document.querySelector('#tipo5'),document.querySelector('#tipo6')]
for(let i = 0;i < 3;i++){
    fetch('https://pokeapi.co/api/v2/pokemon/' + (i + 4))
    .then(response => response.json())
    .then(types => {
        tipo[i].innerHTML = types[0].type.name
    })
}