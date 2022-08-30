

let juegos = ['Zelda', 'Mario', 'Metroid', 'Chrono'];
console.log('Largo', juegos.length);

let primero = juegos[0];
let ultimo = juegos.length - 1;

console.log( {primero, ultimo} );

juegos.forEach( ( elemnto, indice, arr) => {
    console.log({ elemnto, indice, arr });
});

let nuevaLongitud = juegos.push( 'F-Zero');
console.log( nuevaLongitud, juegos);

nuevaLongitud = juegos.unshift('Fire Emblem');
console.log( nuevaLongitud, juegos);

let juegoBorrado = juegos.pop();
console.log( juegoBorrado, juegos);

let pos = 1;

let juegosBorrados = juegos.splice(pos, 2);
console.log(juegosBorrados, juegos);


let metroidIndex = juegos.indexOf('Metroid');
console.log( metroidIndex);