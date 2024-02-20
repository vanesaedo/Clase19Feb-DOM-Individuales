/*

Ejercicio 1:

Añadir dos elementos `<li>` a un `<ul>` (Desde JS), y unirlos al DOM de tu página HTML
    Métodos recomendados:
    - innerHTML
    - appendChild()
    - createElement()
    - createAttribute()
    - createTextNode()
*/    

  //document.getElementById("div2").innerHTML += "<p>queso</p>";
 const parent = document.getElementById("lista");


 const child = document.createElement("li");
  const text = document.createTextNode("hola");
  const child2 = document.createElement("li");
  const text2 = document.createTextNode("hola2");

  child.appendChild(text); 
  parent.appendChild(child);
  
  child2.appendChild(text2); 
  parent.appendChild(child2);



//Ejercicio 1 bis:
/*Nota (ejercicio avanzado): pensar el caso de añadir datos de un array de tareas de tamaño indeterminado (los datos ya están dentro del array)
["comprar","barrer","alimentar gato","colada"]*/




const arr = ["comprar","barrer","alimentar gato","colada","Pablo"];


function incluirTarea (array){

        for (let i = 0; i < array.length; i++) {
            const child = document.createElement("li");
            const tarea = document.createTextNode(array[i]); 
            child.appendChild(tarea);
            parent.appendChild(child);

        }
    }
incluirTarea(arr);


    
