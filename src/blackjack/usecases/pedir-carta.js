

/**
 * Esta función me permite tomar una carta
 * @param {Array<String>} deck Ejemplo: 7S
 * @returns {String}  Retorna la última carta del deck y la elimina del mismo.
 */
export const pedirCarta = ( deck ) => {

    if ( !deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
      
    return carta;
}