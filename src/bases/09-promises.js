import { getHeroeById } from "./bases/08-imp-exp";

// const promesa = new Promise( (resolve, reject) => {

//         setTimeout( () => {
//             const heroe = getHeroeById(2);
//             resolve(heroe);
//             //resolve();
//             reject( 'No se pudo encontrar el heroe')
//         }, 2000)

// }); 

// promesa.then( (heroe) => {
//     console.log('heroe', heroe)
// })
// .catch( err => console.warn( err ))

const getHeroesByIdAsync = ( id ) => {

    return new Promise( (resolve, reject) => {

        setTimeout( () => {
            const heroe = getHeroeById( id );
            if( heroe ) {
                resolve(heroe);
            }else {
                reject( 'No se pudo encontrar el heroe')
            }
            
            //resolve();
            
        }, 2000)

}); 

}

getHeroesByIdAsync(2)
        .then( console.log)
        .catch( console.warn)
        // .then( heroe => console.log('Heroe', heroe))
        // .catch(err => console.warn( err ))

