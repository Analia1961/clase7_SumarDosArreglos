//CLASE 7 - Lunes 9 de mayo de 2022
//Estructura de Datos - Arreglos

// Ejercicio 1: Sumar Dos Arreglos

/* • Sumar los elementos de cada una de las posiciones de dos arreglos y guardar el resultado en otro arreglo.
• El arreglo tiene dimensión 6 y los números de los dos vectores los carga el usuario. */

/*  Ejemplo:
v1 = 1, 3, 7, 9, 9, 5
v2 = 6, 9, 2, 5, 9, 4
vSuma = 7, 12, 9, 14, 18, 9
*/

let v1: number[] = new Array(6);
let v2: number[] = new Array(6);
let vSuma: number[] = new Array(6);
let indice: number;
//Cargo el vector v1
for (indice = 0; indice < 6; indice++) {
  v1[indice] = Number(prompt("Ingrese el valor de v1[" + indice + "]"));
}
//Cargo el vector v2
for (indice = 0; indice < 6; indice++) {
  v2[indice] = Number(prompt("Ingrese el valor de v2[" + indice + "]"));
}
//Sumo los valores y muestro
for (indice = 0; indice < 6; indice++) {
  vSuma[indice] = v1[indice] + v2[indice];
  console.log("vSuma[ " + indice + "]= " + vSuma[indice]);
}

/*
El ejercicio de resolución en las filminas marca error en la consola.
Encerrando entre comillas lo que en la filmina cambia a color rojo  y lo que cambia a violeta aquí en esta plantilla, el problema se soluciona. 
CONSULTAR
*/
