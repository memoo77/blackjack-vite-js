

/**
 * 
 * @param {String} carta Ejemplo: el valor 7S
 * @returns {Number}Retorna el valor de la carta, Ejemplo: 7 de la 7S.
 */

export const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}