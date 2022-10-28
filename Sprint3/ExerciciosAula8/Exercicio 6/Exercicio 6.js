function calcularFatorial (){
    let numero = document.querySelector('#numero').value, imprimirFatorial = document.querySelector('#imprimirFatorial'), fatorial = 1
    for(let i = 2;i <= numero;i++){
        fatorial *= i
    }
    imprimirFatorial.innerHTML = "O fatorial do numero digitado é " + fatorial
}