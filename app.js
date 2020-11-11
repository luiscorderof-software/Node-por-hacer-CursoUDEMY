// const { crearTarea, listarTarea, actualizarTarea } = require('./Comandos/Comandos');
let Tareas = require('./Comandos/Comandos');

// const argv = require('Yargs').argv;
const colors = require('colors');
const argv = require('./Config/Yargs').argv;
console.log(argv);

let comando = argv._[0];

switch (comando) {
    case 'actualizar':
        console.log('Actualizar');
        let tarea = Tareas.actualizarTarea(argv.descripcion, argv.completado);
        console.log(tarea);
        break;
    case 'listar':
        console.log('Listar');
        let listado = Tareas.listarTarea();
        console.log(listado);
        for (let tarea of listado) {
            console.log('========= Tareas por HACER ========='.green);
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log('===================================='.green);
        }
        // console.log(listarTarea());
        break;
    case 'crear':
        console.log('Crear');
        let tareaNueva = Tareas.crearTarea(argv.descripcion);
        console.log(tareaNueva);
        break;
    case 'borrar':
        console.log('Borrar');
        let tareaBorrada = Tareas.borrarTarea(argv.descripcion);
        console.log(tareaBorrada);
        break;
    default:
        console.log('Comando no reconocido.');
}