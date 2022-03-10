
//actividad 1 Determinar si es divisible entre dos
var num1=Number( prompt("Ingresa un número"))
var result=num1/2
if (result%1== 0) {
    console.log(num1, " es divisible entre 2.")
}
else {
    console.log(num1, " no es divisible entre 2.") 
}


//actividad 2 Determinar si es par
var num1=Number( prompt("Ingresa un número"))
if (num1%2== 0) {
    console.log(num1, " es par")
}
else {
    console.log(num1, " es impar.") 
}


//actividad 3 -número ganador
var num1=Number( prompt("Ingresa un número"))

if (num== 1000) {
    console.log("Ganaste un premio")
}
else {
    console.log("Lo sentimos, sigue participando") 
}


//actividad 4- Mostrar el número menor
var num1=Number( prompt("Ingresa un número"))
var num2=Number( prompt("Ingresa otro número"))
var result=num1/num2
if (result> 1) {
    console.log(num1, " es mayor que ", num2)
}
elseif (result<1) {
    console.log(num2, " es mayor que ", num1) 
    
}
else {
    console.log(num1, " es igual que ", num2) 
}

//actividad 5- Mostrar el número mayor
var num1=Number( prompt("Ingresa un número"))
var num2=Number( prompt("Ingresa otro número"))
var num3=Number( prompt("Ingresa otro número más"))
var result=num1/num2
if (num1>num2 && num1>num3) {
    console.log(num1, " es el número más alto")
}
elseif (num2>num1 && num2>num3) {
    console.log(num2, " es el número más alto")
    
}
else {
    console.log(num3," es el número más alto")
}

