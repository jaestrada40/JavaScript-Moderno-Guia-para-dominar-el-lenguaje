



let a = 5;


if( a < 10){
    console.log('a es mayor que 10');

}else{
    console.log('a es menor a 10');
}


const hoy = new Date();
let dia = hoy.getDay();

console.log({dia});

// Sin usar If Else, o Switch, únicamente objetos
dia = 3; // 0:Domingo, 1: Lunes....

const diasLetras = {
    0: 'domingo',
    1: 'lunes',
    2: 'martes',
    3: 'miercoles',
    4: 'jueves',
    5: 'viernes',
    6: 'sabados',
}

console.log(diasLetras[dia] || 'Día no es valido');

const diasLetras2 = ['Domingo','Lunes', 'Martes', 'Miercoles', 'Viernes', 'Sabado'];

//día de la semana
console.log(diasLetras2[dia]);


