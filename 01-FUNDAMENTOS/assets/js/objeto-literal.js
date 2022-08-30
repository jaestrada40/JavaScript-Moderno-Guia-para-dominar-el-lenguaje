
let personaje = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 44,
    corrds:{
        lat: 34.034,
        lng: -118.70
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster' ],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu, California',
    },
    'ultima pelicual': 'Ultima'
}

console.log( personaje );
console.log( 'Nombre: ',personaje.nombre);
console.log( 'Nombre: ', personaje['nombre']);
console.log( 'Edad: ', personaje.edad);

console.log( 'Coordenadas: ', personaje.corrds );
console.log( 'Latitud: ', personaje.corrds.lat);
console.log( 'Longitud: ', personaje.corrds.lng);

console.log( 'No. trajes: ', personaje.trajes.length);
console.log( 'Último traje: ', personaje.trajes[ personaje.trajes.length -1]);

const x = 'vivo';
console.log( 'Vivo: ', personaje[x]);

console.log('Última pelicula: ', personaje['ultima pelicual'])


//Más detalles

delete personaje.edad;
console.log( personaje );

personaje.casado = true;

const entriesPares = Object.entries( personaje);
console.log( entriesPares );



