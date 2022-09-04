//TAREA DIA 01-09-2022
let myVar = 0;
var myVar2 = 1;

const myDoc = document;
console.log (myDoc);

//TAREA DIA 05-09-2022

let myH1 = myDoc.getElementsByTagName("h1");

let myH3 = myDoc.getElementById("video");

console.log(myH1);
console.log(myH3);

myH3.innerText = "EStoy modificando el texto dentro del H3";

const myButtonStr = "<button>Esto es un boton </button> </br>";

myH3.innerHTML = myButtonStr;

const cant_elements = 15;

for (let index = 0; index < cant_elements; index++) {
    myH3.innerHTML += myButtonStr;
}
