//13 busqueda en un arreglo de objetos 
/*
let buscarArreglo =(personas,nombre)=>{
    for (let i=0; i<personas.length; i++){
        if (personas[i].nombre===nombre){
            return personas[i];
        }
    }
}

let personas=[
    {nombre:'lucas', edad:22},
    {nombre:'Maria', edad:30},
    {nombre:'santiago', edad:20}
];
let resultado=buscarArreglo(personas,'lucas');
console.log(resultado);
*/
//14 eliminar un objeto de un arreglo 
/*
function eliminarObjetoArreglo(personas,nombre){
    for (let i=0; i< personas.length; i++){
        if (personas[i].nombre===nombre){
            //splice sirve para eliminar,remplazar y eliminar
            personas.splice(i,1);
            break;
        } 
    }
    return personas;
}
let personas=[
    {nombre:'paula',edad:25},
    {nombre:'miguel',edad:12},
    {nombre:'ana', edad:22}
];
let arregloNuevo= eliminarObjetoArreglo(personas,'ana');
console.log(arregloNuevo);
*/
//15 Filtrar mayores de edad
/*
function filtrarMayores(personas){
    let mayores=[];

    for (let i=0; i<personas.length; i++){
        if (personas[i].edad >=18){
            mayores.push (personas[i]);
        }
    }
    return mayores;
}
let personas=[
    {nombre:'paula',edad:25},
    {nombre:'juan', edad:33},
    {nombre:'carlos',edad:18},
    {nombre:'samuel',edad:15}
];
let Mayores=filtrarMayores(personas);
console.log(Mayores)
*/


