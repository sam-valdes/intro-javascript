
//actividad 2
var num1=Number( prompt("Ingresa un número"))
var contador=0;
var index=1;
while (index<=num1) {
    if(index%5==0){
        contador=contador+1;
        console.log(index, "es múltiplo de 5.");
    }
    index=index+1
}
console.log("De 1 a ", num1,  " existen ", contador, " múltiplos de 5.")

//actividad 3
var num1=Number( prompt("Ingresa un número"))
var contador=0;
var index=1;
do {
    if(index%5==0){
        contador=contador+1;
        console.log(index, "es múltiplo de 5.");
    }
    index=index+1
} while (index<=num1);
console.log("De 1 a ", num1,  " existen ", contador, " múltiplos de 5.")


//actividad 4


var contador=0; 
for(var index=1; index<=50; index++) {
    if(index%2 !=0){
        contador=contador+1;
        console.log(index," es un número impar")
    }
}
console.log("De 1 a 50 existen ", contador, " números impares.")