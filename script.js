//Ejercicio 1

function displayHideParragraph() {
    let parrafo = document.getElementById("texto");
    if (parrafo.style.visibility == 'hidden'){
        parrafo.style.visibility == 'visible';
} else {
    parrafo.style.visibility = 'hidden';
}
}
     
  document.getElementById("muestraEsconde").addEventListener("click", displayHideParragraph);

  //Ejercicio 2: Hacer que con onmouseover y onmouseout, se muestre/esconda el título de una foto cuando pases el raton sobre dicha foto


document.getElementById("arbol").onmouseover = function() {mouseOver()};

document.getElementById("arbol").onmouseout = function() {mouseOut()};

function mouseOut() {
  document.getElementById("titulo").style.visibility = 'visible';
} 
function mouseOver() {
    document.getElementById("titulo").style.visibility = 'hidden';
 }

  //document.getElementsById("arbol").addEventListener("onmouseout",displayTitle);


