class Persona{

    static _conteo = 0;
    static get conteo(){
        return Persona._conteo + ' instancias';

    }

    static mensaje(){
        console.log( this.nombre );
        console.log('Hola a todos, soy un método stático');

    }

    nombre = '';
    codigo = '';
    frase = '';
    comida = '';

    constructor( nombre = 'Sin nombre', codigo = 'Sin código', frase = 'Sin frase' ) {
        
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;

        Persona._conteo++;

    }

    set setComidaFavorita( comida ){
        this.comida = comida.toUpperCase();
    }

    get getComidaFavorita() {
        return `La comida favorita de ${this.nombre} es ${this.comida}`;
    }

    quinesoy(){
        console.log(`Soy ${this.nombre} y mi identidad ${this.codigo}`);
    }

    miFrase(){
        this.quinesoy();
        console.log(`Soy ${this.codigo} dice: ${this.frase}`);
    }


}

class Heroe extends Persona{
    clan = 'sin clan';

    constructor( nombre, codigo, frase){
        super( nombre, codigo, frase );

        this.clan = ' Los Avengers';
    }

    quinesoy(){
        console.log(`Soy ${this.nombre}, ${this.clan}`);
        super.quinesoy();
    }

}


const spiderman = new Heroe('Peter Parker', 'Spiderman', 'Soy tu amigable vecino Spiderman');
// const ironman = new Heroe();

console.log( spiderman );
spiderman.quinesoy();