
function saludar( nombre ){
    console.log( arguments );
    console.log("Hola mundo " + nombre);
}

const saludar2 = function( nombre ){
    console.log('Hola Mundo ' + nombre );
}

const  saludarFlecha = () => {
    console.log('Hola Flecha');
}

const  saludarFlecha2 = ( nombre ) => {
    console.log('Hola Flecha ' + nombre);
}



const retornoDeSaludar = saludar( 'Javier' , 44, false, 'Guatemala');

// saludar2( 'Javier');
// saludarFlecha();
// saludarFlecha2( 'Estrada');

function sumar( a, b ){
    return a + b;
}


/* Esta opcion se útiliza para cuando hay mas opciones antes del return */
// const sumarNumero = ( a, b ) => {
//     return a + b;
// }


/* Esta opcion es solo para retornar un dato */
const sumarNumero = ( a, b ) => a + b;

// console.log( sumar( 2, 4) );
// console.log( sumarNumero( 2, 5 ) );

// function getAleatorio(){
//     return Math.random();
// }
// console.log(getAleatorio());



// En una función de flecha, que no tenga llave {}

const getAleatorio2 = () =>  Math.random();

console.log( getAleatorio2() );



