//Funciones en JS
//function saludar(){}
// const saludar = function(nombre) {
//    return `Hola, ${nombre}`
// }

const saludar2 = (nombre) => {
   return `Hola, ${nombre}`
}

const saludar3 = (nombre) => `Hola, ${nombre}`;

const saludar4 = () => `Hola Mundo`;


//saludar = 30 no hacer esto ya que puedes confundir cin la funcion

// console.log( saludar('Goku') )
console.log( saludar2('Vegeta') )
console.log( saludar2('Anakin') )
console.log( saludar4())

const getUser = () => ({
      uid: 'ABC123',
      username: 'El_papi1502',
   })

   console.log( getUser())




//TAREA
//1.Transformen a una funcion de flecha
//2.Tiene que retornar un objeto implicito
//3.Pruebas
// function getUsuarioActivo( nombre ) {
//    return {
//       uid: 'ABC567',
//       username: nombre
//    }
//  }
//  const usuarioActivo = getUsuarioActivo('Andres');
//  console.log( usuarioActivo );


const getUsuarioActivo = ( nombre ) => ({
      uid: 'ABC567',
      username: nombre
   }
)
 const usuarioActivo = getUsuarioActivo('Andres');
 console.log( usuarioActivo );