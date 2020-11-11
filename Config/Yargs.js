const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
};

const completado = {
    demand: true,
    default: true,
    alias: 'c',
    desc: 'Descripción de la tarea por hacer'
};

const argv = require('yargs')
    .command('crear', 'CREA un elemento TO-DO', {
        descripcion
    })
    .command('actualizar', 'ACTUALIZA un elemento TO-DO', {
        descripcion,
        completado
    })
    .command('borrar', 'BORRA un elemento TO-DO', {
        descripcion
    })
    .command('listar', 'LISTA todos los elementos TO-DO', {})
    .help()
    .argv;

module.exports = {
    argv
}