var edad = 27, peso = 96, sandwich = 2, jugaraAlFutbol = 3
var precioVino = 200.3

edad = edad + 1//28
edad += 1//29
edad++//30

peso = peso - 3//93
peso -= 2//91
peso--//90

//Aumento y disminución de peso
peso = peso + sandwich
peso = peso - jugaraAlFutbol

//Calculo
var total = precioVino * 3
var totalRound = Math.round(total*100)/100
var totalStr = totalRound.toFixed(3)
var total1 = parseFloat(totalStr)

//Calculo pizza
var pizza = 8
var personas = 2
var cantidadPorciones = pizza / personas
