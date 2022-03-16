//Actividad 8.1-Crear una función para buscar una palabra dentro de una oración

function sentencesearch(sentence,word) {
    let position= sentence.search(word)
    if (position>=0){
        console.log("true")
    }
    else 
        console.log("false")
}
sentencesearch("Tengo 2 perros", "perros");

//Actividad 8.2-Suma de los elementos de un arreglo

var array=[1,2,3,4,10,11]
j=0
function arraysum() {
    for (var i=0; i<array.length; i=i+1) {
      
        j=j+array[i]
        }
    return console.log(j)
    }

//Actividad 8.3-Crear una función para buscar una palabra dentro de una oración

function palindrome(word) {
    var splitword=word.split("");
    var arrayrev=splitword.reverse();
    var rev=arrayrev.join("");
    if (word==rev){
        console.log("true")
    }
    else 
        console.log("false")
}
palindrome("ana");


//Actividad 8.4 Calcular temperaturas

function tempcalc(temp,type) {
    if (type=="C") {
        var temperature=Number(temp)*1.8+32;
        return console.log("La temperatura es de",temperature,"° Farenheit");
    }
    else if (type=="F") {
        var temperature=(Number(temp)-32)*(5/9);
        return console.log("La temperatura es de",temperature,"° Celsius");
    }
    else {
        console.log("Tipo de temperatura no aceptable")
    }
    
}