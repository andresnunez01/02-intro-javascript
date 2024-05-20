const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 54545,
        lat: 14.2535,
        lng: 34.3235,
    },
}

const persona2 ={ ...persona};
persona2.nombre = 'Peter';

console.log(persona);
console.log(persona2);