//Actividad 5 Iterar el arreglo e imprimir los valores mayores a 3
arr=[1,4,6,10,22,55,46,2,5,0]
var i=0
for (var i=0; i<arr.length; i=i+1) {
    if (arr[i]<3) {
        console.log(arr[i])
    }
    
}



//Actividad 5.2 Declara un arreglo vacío con un ciclo while agrega los elemenots al array

var array=[]
var i=0
while (i<5){
    array[i]=i
    i=i+1
}
console.log(array)