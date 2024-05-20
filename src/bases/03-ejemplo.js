const auto = {
    marca: 'Chevrolet',
    modelo: 'Trax',
    dueño: {
        nombre: 'Sandra',
        apellido: 'Castro'
    }

}

const vendido = { ...auto.dueño}
vendido.nombre = 'exhall';
vendido.apellido = 'nunez';


console.log(auto)
console.log(vendido)