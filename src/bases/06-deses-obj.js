//Desestructuracion
//Asignacion Destructurante
const persona = {
   nombre: 'Tony',
   edad: 45,
   clave: 'Ironman'
};

// const { nombre:nombre2, edad, clave } = persona;

// console.log( nombre2 );
// console.log( edad );
// console.log( clave )

// console.log( persona.edad );
// console.log( persona.clave );

const PT = ( { clave, nombre, edad, rango = 'Capitan' } ) => {

   // console.log( nombre, edad)

   return {
      nombreClave: clave,
      anios: edad,
      latlng:{
         lat: 234,
         lng: 244
      }
   }
}

const { nombreClave, anios, latlng: lat, lng} = PT( persona );

console.log( nombreClave, anios )
console.log( lat, lng )