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
//Ejercicio 2 con TOOGLE

/*Añadimos al html: 
<div id = "div1">
<h3>Probandoclases CSS co JS</h3>
<p>bjañllskdfñalskjdfñlaksdfñlaksdfñlakjdfsl</p>
</div>

  //document.getElementsById("arbol").addEventListener("onmouseout",displayTitle);
*/

//CREAR DOCUMENTOS EN EL DOM (pre-2015)

document.getElementById("boton5").addEventListener("click",function()){
  //document.getElementById("div2").innerHTML += "<p>queso</p>";
  const parent = document.getElementById("div2");
  const child = document.createElement("p");
  const txt = document.createTextNode("Texto para párrafo desde JS");
  
  child.appendChild(txt); // <p>Texto para párrafo</p>
  parent.appendChild(child);    //<div id="div2"><p>Texto para párrafo</p></div>
}

//AÑADIR ATRIBUTOS

child.setAttribute("id","p1")

//FORMA POST-2015

/*Imaginemos que nos dan un array de datos en forma de string y hay que pintarlo:*/

const datos = ["Patatas", "Pescado"]

//1º: creo un ul con list en el html
let template = `<ul
                  <li>${datos[0]}</li>
                  <li>${datos[1]}</li>
                </ul>;`

document.getElementById("div3").innerHTML=template;

//Para unirlo a un botón.

document.getElementById("boton").addEventListener("click",function );
function añadirLista {
document.getElementById
let template = `<ul id="loquesea">
                  <li>${datos[0]}</li>
                  <li>${datos[1]}</li>
                </ul>;`

document.getElementById("div3").innerHTML=template;

}

//


document.getElementById("boton7").addEventListener("click", function () {
  const datos = [
    { marca: "BMW", peso: 1600, color: "rojo" },
    { marca: "BMW", peso: 1600, color: "azul" },
    { marca: "BMW", peso: 1600, color: "verde" },
    { marca: "BMW", peso: 1600, color: "amarillo" },
  ]; // viene de un "servidor externo"
  // Template string
  const lista = `<section>
                  <article>
                    <p>${datos[0].marca}</p>
                    <p>${datos[0].peso}</p>
                    <p>${datos[0].color}</p>
                  </article>
                  <article>
                    <p>${datos[1].marca}</p>
                    <p>${datos[1].peso}</p>
                    <p>${datos[1].color}</p>
                  </article>
                  <article>
                    <p>${datos[2].marca}</p>
                    <p>${datos[2].peso}</p>
                    <p>${datos[2].color}</p>
                </article>
                <article>
                  <p>${datos[3].marca}</p>
                  <p>${datos[3].peso}</p>
                  <p>${datos[3].color}</p>
              </article>

                </section>`;
  document.getElementById("lista2").innerHTML = lista;
});

// Con bucle

document.getElementById("boton8").addEventListener("click", function () {
  const datos = [
    { marca: "BMW", peso: 1600, color: "rojo" },
    { marca: "BMW", peso: 1600, color: "azul" },
    { marca: "BMW", peso: 1600, color: "verde" },
    { marca: "BMW", peso: 1600, color: "amarillo" },
  ]; // viene de un "servidor externo"
  // Template string
  let lista = "<section>";

  for (let i = 0; i < datos.length; i++) {
    lista += `<article>
              <p>${datos[i].marca}</p>
              <p>${datos[i].peso}</p>
              <p>${datos[i].color}</p>
            </article>`
  }
    lista += "</section>";
  document.getElementById("lista3").innerHTML = lista;
});
/*

*/