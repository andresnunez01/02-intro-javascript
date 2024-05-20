//DESESTRUCTURACION DE OBJETOS
const personajes = ['Goku', 'Vegeta', 'Trunks'];

//console.log( personajes[1] );
//console.log( personajes[2] );
//console.log( personajes[3] );

const [,, P2] = personajes;

console.log(P2)

//F2 PARA CAMBIAR TODAS LAS VARIABLES IGUALES

const retornaArreglo = () => {
   return ['ABC', 123]
}

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros)

//TAREA

const estado = ( valor ) => {
   return [valor, () => { console.log('Hola Mundo') }];

}

const [nombre, setNombre] = estado('Goku')
console.log(nombre);
setNombre()