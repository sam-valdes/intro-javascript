//actividad 6.1- Concatenar dos arreglos

var animals=['eagle','monkey','boar','lion']
var comingSoonAnimals=['panter', 'dragon','turtle']

var array=animals.concat(comingSoonAnimals);

console.log(array);

//actividad 6.2- Acomodar de menor a mayor

var arr=[4,6,1,0,8,2]
arr.sort(function(a,b){return a-b})

//actividad 6.3- Agregar un nuevo animal ('cow') al arreglo de animals
var animals=['eagle','monkey','boar','lion']
animals.push("cow")
console.log(animals)
    

//actividad 6.4 Retira el elemento 'eagle' de animals
var animals=['eagle','monkey','boar','lion']
animals.shift()
console.log(animals)