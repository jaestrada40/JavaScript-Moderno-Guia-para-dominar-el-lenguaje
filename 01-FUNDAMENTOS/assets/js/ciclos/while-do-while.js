

const carros = [ 'Toyota', 'Mazda', 'Hyundai', 'Mercedes Venz G63'];

let i = 0;

// while( i < carros.length ){
//     console.log( carros[ i ] );
//     i++;
// }


while( carros[i] ){
    if ( i === 1 ){
        //break;
        i++;
        continue;
    }

    console.log( carros[ i ] );
    i++;
}



console.warn( 'Do While');
let j = 0;
do {
    console.log( carros[j]);
    j++;


}while( carros[j] );