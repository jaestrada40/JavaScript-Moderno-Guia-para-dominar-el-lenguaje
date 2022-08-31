

const regresaTrue = () =>{
    console.log( 'Regrea true' );
    return true;
}

const regresaFalse = () =>{
    console.log( 'Regrea false' );
    return false;
}



console.warn( 'Not o la negación' );
console.log( true ); //true
console.log( !true ); //false
console.log( !false ); //true

console.log( !regresaFalse() ); //true

console.warn( 'And');
console.log( true && true ); //true
console.log( true && false ); //false
console.log( true && !false ); //true

console.log( '===============' );
console.log( regresaFalse() && regresaTrue() ); //false
console.log( regresaTrue() && regresaFalse() ); //false

console.log( '====== && =========' );

regresaFalse() && regresaTrue();

console.warn('OR');
console.log( true || false);
