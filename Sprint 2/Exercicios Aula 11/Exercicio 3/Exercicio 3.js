let segundos = 3700, horas = 0, minutos = 0
while(segundos >= 3600){
    segundos -= 3600
    horas++
}
while(segundos >= 60){
    segundos -= 60
    minutos++
}
console.log("O evento na fábrica durou " + horas + " hora(s), " + minutos + " minuto(s) e " + segundos + " segundo(s)")