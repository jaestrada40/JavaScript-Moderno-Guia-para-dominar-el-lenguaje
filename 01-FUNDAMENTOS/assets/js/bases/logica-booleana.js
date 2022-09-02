

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

console.log('4 condiciones: ', true && true && true && false);

console.warn('OR');
console.log( true || false);
console.log( false || false);

console.log( regresaTrue() || regresaFalse() );


console.warn( ' Asignaciones' );

const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;

const a1 = true && 'Hola Mundo' && 150;
const a2 = 'Hola' && 'Mundo';
const a3 = soyFalso || 'Ya no soy falso';
const a4 = soyFalso || soyUndefined || soyNull || 'Ya no soy falso de nuevo' || true;
const a5 = soyFalso || soyUndefined || regresaTrue() || 'Ya no soy falso de nuevo' || true;


console.log({a1, a2, a3, a4, a5,   })


if ( true || true || true || false ){
    console.log( 'Hacer algo');
}else{
    console.log( 'Hacer otra cosa');
}

