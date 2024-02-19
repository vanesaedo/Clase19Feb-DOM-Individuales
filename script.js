//Ejercicio 1

function displayHideParragraph() {
    let parrafo = document.getElementById("texto");
    if (parrafo.style.visibility == 'hidden'){
        parrafo.style.visibility = 'visible';
} else {
    parrafo.style.visibility = 'hidden';
}
}
     
  document.getElementById("muestraEsconde").addEventListener("click", displayHideParragraph);

  //Ejercicio 2: Hacer que con onmouseover y onmouseout, se muestre/esconda el título de una foto cuando pases el raton sobre dicha foto

function hideTitle() {
   document.getElementById("titulo").style.visibility == 'hidden';
}
function displayTitle() {
   document.getElementById("titulo").style.visibility == 'visible';
}

  document.getElementById("arbol").addEventListener("onmouseover",hideTitle);
  document.getElementById("arbol").addEventListener("onmouseout",displayTitle);


