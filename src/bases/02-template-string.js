const nombre = 'andres';
const apellido = 'alvarez';

//const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = ` 
${nombre} 
${apellido}
${1 + 1}
`

console.log(nombreCompleto)

function getSaludo(nombre) {
    
    return 'Hola ' + nombre;
}

console.log(`esto es un texto: ${getSaludo(nombre)}`)