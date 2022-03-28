//Actividad 10.1
const Family = [
  {
    name: 'John',
    age: 13
  },
  {
    name: 'Mark',
    age: 56,
  },
  {
    name: 'Rachel',
    age: 45,
  },
  {
    name: 'Nate',
    age: 67,
  },
  {
    name: 'Jeniffer',
    age: 65,
  }
];
let Age=[]
for(var i =0 ; i < Family.length; i++){
  Age.push(Family[i].age)
}

min_age = Math.min.apply(Math, Age)
max_age=Math.max.apply(Math, Age)
agediff=max_age-min_age
youngest=Family[Age.indexOf(min_age)].name
oldest=Family[Age.indexOf(max_age)].name

console.log(oldest," is the oldest and he/she is ", max_age," years old and ",youngest,"is the youngest and he/she is",min_age, "years old.")
console.log("The age difference is ", agediff, ".")

//Actividad 10.2

const numbers = [ 1, -4, 12, 0, -3, 29, -150];          
let calc=[]
for(var i =0 ; i < numbers.length; i++){
  if(numbers[i]>0) {
      calc.push(numbers[i])
  }
      
}
j=0
function arraysum(array) {
  for (var i=0; i<array.length; i=i+1) {
    
      j=j+array[i]
      }
  return console.log(j)
  }

if(calc.length>0){
  console.log(arraysum(calc))
}    
else 
  console.log(0)

//Actividad 10.3 ..

/**
* Escriba una función de JavaScript que tomará una serie de números almacenados
* y encontrará el segundonúmeros más bajos y segundos más altos, respectivamente
* del siguiente arreglo:  const arr = [3,4,6,1,5,2,9,10,23,12]
*/

const arr = [3,4,6,1,5,2,9,10,23,12]

function large_small2(array) {
  newarray=array.sort(function(a, b){return a-b})
  min2=newarray[1]
  
  large2=newarray[Number(newarray.length)-2]

  return console.log("El segundo número más bajo es:",min2, " y el segundo número más alto es:",large2)
}

large_small2(arr)
