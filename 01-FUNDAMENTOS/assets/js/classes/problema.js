

const javi = {
    nombre: 'Javier',
    edad: 44,
    imprimir(){
        console.log(`Nombre: ${ this.nombre } - edad: ${ this.edad }Nombre: ${ this.nombre } - edad: ${ this.edad }`);
    }
}

// javi.imprimir();
// Ok esto se debe de crear con la palabra new

function Persona(nombre, edad){
    console.log('Se ejecutó esta línea');

    this.nombre = nombre;
    this.edad = edad;

    this.imprimir = function(){
        console.log(`Nombre: ${ this.nombre } - edad: ${ this.edad }`)
    }
}

const maria = new Persona('Maria', 18);
const javier = new Persona('Javier', 44);
// console.log( maria );

maria.imprimir();
javier.imprimir();

