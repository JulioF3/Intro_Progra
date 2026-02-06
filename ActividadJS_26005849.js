var mes = parseInt(prompt("Ingresa en número tu mes de nacimiento:"))
var dia = parseInt(prompt("Ingresa tu día de nacimiento:"))

if((mes==3 && dia>=21)||(mes==4 && dia<=20))
{alert("Tu signo zodiacal es Aries")}
else if((mes==4 && dia>=21)||(mes==5 && dia<=20))
{alert("Tu signo zodiacal es Tauro")}
else if((mes==5 && dia>=21)||(mes==6 && dia<=20))
{alert("Tu signo zodiacal es Géminis")}
else if((mes==6 && dia>=21)||(mes==7 && dia<=22))
{alert("Tu signo zodiacal es Cáncer")}
else if((mes==7 && dia>=23)||(mes==8 && dia<=23))
{alert("Tu signo zodiacal es Leo")}
else if((mes==8 && dia>=24)||(mes==9 && dia<=22))
{alert("Tu signo zodiacal es Virgo")}
else if((mes==9 && dia>=23)||(mes==10 && dia<=23))
{alert("Tu signo zodiacal es Libra")}
else if((mes==10 && dia>=24)||(mes==11 && dia<=22))
{alert("Tu signo zodiacal es Escorpio")}
else if((mes==11 && dia>=23)||(mes==12 && dia<=21))
{alert("Tu signo zodiacal es Sagirario")}
else if((mes==12 && dia>=22)||(mes==1 && dia<=20))
{alert("Tu signo zodiacal es Capricornio")}
else if((mes==1 && dia>=21)||(mes==2 && dia<=19))
{alert("Tu signo zodiacal es Acuario")}
else if((mes==2 && dia>=20)||(mes==3 && dia<=20))
{alert("Tu signo zodiacal es Piscis")}
else {alert("Fecha inválida.")}