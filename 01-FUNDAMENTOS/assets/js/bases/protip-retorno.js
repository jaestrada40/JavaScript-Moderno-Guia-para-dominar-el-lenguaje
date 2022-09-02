

// function crearPersona(nombre, apellido) {
//     return { nombre, apellido}
// }

const  crearPersona = (nombre, apellido ) =>  ( {nombre, apellido} );


const persona = crearPersona( 'Javier ', 'Estrada');
console.log(persona);


function imprimeArgumentos(){
    console.log(arguments);
}

imprimeArgumentos(10, true, 'Javier', false);


const imprimeArgumentos2 = ( edad, ...arguments) => {
    // console.log( {edad, arguments} );
    return arguments;
}

const [ casado, vivo, nombre, saludo ] = imprimeArgumentos2(110, true, false, 'Estrada', 'Hola');
console.log( {casado,vivo,  nombre, saludo} );


const { apellido: nuevoApellido } = crearPersona( 'Javier', 'Estrada');
console.log({nuevoApellido});


/* Destructuración de argumentos */


const tony = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 44,
    trajes: ['Mark I', 'Mark V', 'Hulkbuster' ],
};

// const imprimePropiedades = ( personaje ) => {
//     console.log('Nombres', personaje.nombre);
//     console.log('codeName', personaje.codeName);
//     console.log('vivo', personaje.vivo);
//     console.log('edad', personaje.edad);
//     console.log('trajes', personaje.trajes);
// }

// imprimePropiedades(tony);


const imprimePropiedades = ( {nombre, codeName, vivo, edad = 0, trajes} ) => {
    console.log({nombre});
    console.log({codeName});
    console.log({vivo});
    console.log({edad});
    console.log({trajes});
}

imprimePropiedades(tony);