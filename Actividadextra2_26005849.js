var op = prompt("Quieres jugar (SI/NO)")
switch(op){
  case"SI": 
  var compu = (Math.floor(Math.random() * (10 - 1) + 1))
  var num = prompt("Ingrese un número entre 3 y 6")

while((num<3) || (num>6)){
  alert("El número ingesado es inválido")
  alert("Ingresa un nuevo número")
  var num = prompt("Ingrese un número entre 3 y 6")
}

var adi = prompt("Adivina si tu número es mayor, menor o igual al de la computadora")

if((num>compu) && (adi=="mayor")){
  alert("La computadora eligió "+compu+", usted eligió "+num+", su elección es "+adi+" ¡Ha adivinado!")
}
else if((num<compu) && (adi=="menor")){
  alert("La computadora eligió "+compu+", usted eligió "+num+", su elección es "+adi+" ¡Ha adivinado!")
}
else if((num==compu) && (adi=="igual")){
  alert("La computadora eligió "+compu+", usted eligió "+num+", su elección es "+adi+" ¡Ha adivinado!")
}
else {alert("La computadora eligió "+compu+", usted eligió "+num+", su elección es "+adi+". No adivino :(")}
var op = prompt("Quieres volver jugar (SI/NO)")
break

case"NO": 
alert("Julio Josué Flores Reyes 26005849")
break

default:
alert("Opción inválida")
}
