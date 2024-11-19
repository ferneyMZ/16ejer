//7 invetir un arreglo 
/*
let invertirArreglo = (arreglo) => {
    
    let arrInvertido = [];
  
    for (let i = arreglo.length - 1; i >= 0; i--) {
      // push  para agregar elementos al final de un array
      arrInvertido.push(arreglo[i]);
    }
   
    return arrInvertido;
  };
  
  let arreglo = [1, 2, 3, 4, 5];
  console.log(invertirArreglo(arreglo)); 
  */

  //8 remover duplicados en un arreglo 
/*
  let eliminarDuplicados = (arr) => {
    //indexof Devuelve el índice de base en cero de la primera aparición del carácter especificado en la instancia en cuestión
    return arr.filter((elemento, indice) => arr.indexOf(elemento) === indice);
}


let arregloConDuplicados = [1, 2, 2, 3, 4, 4, 5];
let arregloSinDuplicados = eliminarDuplicados(arregloConDuplicados);

console.log(arregloConDuplicados); 
console.log(arregloSinDuplicados);
*/
// 9 transformar todos los nombres a mayusculas 
/*
// toUpperCase para pasar a mayusculas 
let convertirMayusculas = nombres => nombres.map(nombre => nombre.toUpperCase());


let nombres = ['María', 'carlos', 'samuel'];
let nombresEnMayusculas = convertirMayusculas(nombres);
console.log(nombresEnMayusculas); 
*/

//10 Buscar el índice de un valor en un arreglo
/*
function encontrarIndice(arreglo, valor) {
  let indice = arreglo.indexOf(valor);
  return indice !== -1 ? indice : -1;
}


let arreglo = [10, 20, 30, 40, 50];
let valorABuscar = 30;
let indice = encontrarIndice(arreglo, valorABuscar);

if (indice !== -1) {
  console.log(`El valor ${valorABuscar} esta en el índice ${indice}.`);
} else {
  console.log(`El valor ${valorABuscar} no se encuentra`);
}
*/

// 11 reemplazar elementos en un arreglo
/*
let reemplazarElemento = (array, datosAntiguo, datoNuevo) => {
  for (let i = 0; i < array.length; i++) {
      if (array[i] === datosAntiguo) {
          array[i] = datoNuevo; 
      }
  }
  return array; 
};
let numeros = [1, 2, 3, 2, 4];
let nuevoArreglo = reemplazarElemento(numeros, 4, 5);
console.log(nuevoArreglo);
 */

//12 calcular el promedio de un arreglo de numero
/*
let calcularPromedio = (array) => {
  if (array.length === 0) 
    return 0;

  let suma = 0; 
  let cantidadNumeros = 0; 

  for (let i = 0; i < array.length; i++) {
      if (typeof array[i] === 'number') { 
          suma += array[i]; 
          cantidadNumeros++; 
      }
  }

  return cantidadNumeros > 0 ? suma / cantidadNumeros : 0; 
};
  
let numeros = [10, 20, 30, 40, 50];
let promedio = calcularPromedio(numeros);
console.log(promedio);
*/
 
