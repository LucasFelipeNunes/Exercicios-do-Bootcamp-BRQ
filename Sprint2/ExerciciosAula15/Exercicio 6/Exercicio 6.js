let temperaturas = [], menorTemperatura, maiorTemperatura, temperaturaMediaSemana, numeroDiasTemperaturaMenorQueMedia
for(let i = 0;i < 7;i++)
{
    temperaturas[i] = parseFloat(prompt(`Digite a temperatura média do ${i + 1}º dia da semana`))
    if(i == 0 || temperaturas[i] < menorTemperatura){
        menorTemperatura = temperaturas[i]
    }
    if(i == 0 || temperaturas[i] > maiorTemperatura){
        maiorTemperatura = temperaturas[i]
    }
    temperaturaMediaSemana += temperaturas[i] / 7
}
for(let i = 0;i < 7;i++)
{
    if(temperaturas[i] < temperaturaMediaSemana){
        numeroDiasTemperaturaMenorQueMedia++
    }
}
console.log(`A menor temperatura da semana foi ${menorTemperatura}\nA maior temperatura da semana foi ${maiorTemperatura}\nA temperatura média da semana foi ${temperaturaMediaSemana}\nO número de dias da semana que a temperatura foi menor que a média semanal foi ${numeroDiasTemperaturaMenorQueMedia}`)