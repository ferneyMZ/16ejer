//1	Imprimir los números del 1 al 100
/*
function imprimirNumeros() {
    for (let i = 1; i <= 100; i++) {
      console.log(i);
    }
  }
  
  imprimirNumeros();
*/

// 2 Contar números pares en un arreglo
/*  function NumerosPares(arr) {
    let contadorPares = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            contadorPares++;
        }
    }

    return contadorPares;
}


let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let cantidadPares = NumerosPares(numeros);
console.log("La cantidad de números pares en el arreglo es: " + cantidadPares);*/



//3	Sumar valores de un arreglo
/*
function sumarVl_arreglo(arreglo){
    let suma=0;
    for (let i=0;i<arreglo.length;i++){
        suma+=arreglo[i];
    }
    return suma;
}
    let arreglo =[2,3,7,3,1,8,9]
    let sumTotal=sumarVl_arreglo(arreglo);

console.log(`Suma total: ${sumTotal}`);
*/

//4 encontrar el numero mas grande en un arreglo 
/*
function numMASgrande(arreglo){
    if (arreglo.length === 0) {
      
    }

    let numMASgrande = arreglo[0];

    for (let i = 1; i < arreglo.length; i++) {
        if (arreglo[i] > numMASgrande) {
            numMASgrande = arreglo[i];
        }
    }

    return numMASgrande;
}


let  numeros = [10, 5, 20, 8, 15];
let resultado = numMASgrande(numeros);
console.log("El número más grande en el arreglo es: " + resultado);
*/

//5 verifique si un elemento esta en el rreglo 
/*
function VerificarNumeroArreglo(arreglo, numero) {
    return arreglo.includes(numero);
};
    let miArrglo =[3,7,9,1,4];
    let numBuscar =9;
    if (VerificarNumeroArreglo(miArrglo,numBuscar)){
        console.log(`${numBuscar} esta en el arrglo `)
    }
    */



//6 contar palabras en una cadena 
/*   
let cadena = "ALCOLIRIKOZ";
console.log(cadena.length);
let palabras=cadena.split('');
console.log(palabras);
 */
   



