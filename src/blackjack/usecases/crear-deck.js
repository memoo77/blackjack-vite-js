import _ from 'underscore';

// export const miNombre = 'Guille'; // exportación de lo que sea
// Esta función crea un nuevo deck

/**
 * Esta función crea una nuevo deck o mazo
 * @param {Array<String>} tiposDeCarta Ejemplo: ['C','D','H','S']
 * @param {Array<String>} tiposEspeciales Ejemplo: ['A','J','Q','K']
 * @returns {Array<String>} -- retorna un nuevo deck de cartas
 */
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

    if ( !tiposDeCarta || tiposDeCarta.length === 0 ) 
        throw new Error('TiposDeCarta es obligatorio');

    if ( !tiposEspeciales || tiposEspeciales.length === 0 ) 
        throw new Error('TiposDeCarta es obligatorio');


    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );

    return deck;
}


// export default crearDeck; //solo uno por archivo