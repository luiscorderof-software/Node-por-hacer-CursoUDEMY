const fs = require('fs');
const colors = require('colors');

let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('DataBase/Data.json', data, (err) => {
        if (err) throw new error('No se pudo GUARDAR!!!', err);
    });
}

const crearTarea = (descripcion) => {
    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    };
    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;
}

const cargarDB = () => {
    try {
        listadoPorHacer = require('../DataBase/Data.json');
    } catch (error) {
        listadoPorHacer = [];
    }

    console.log(listadoPorHacer);
}

let listarTarea = () => {
    cargarDB();

    return listadoPorHacer;
}

let actualizarTarea = (descripcion, completado = true) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion
    });
    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
}

let borrarTarea = (descripcion) => {
    cargarDB();
    /*
    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion
    });

    if (index >= 0) {
        // Retira SOLO el ITEM de esa posición
        listadoPorHacer.splice(index, 1);
        guardarDB();
        return true;
    } else {
        return false;
    }
    */
    let nuevoListado = listadoPorHacer.filter(
        tarea => {
            // Retira TODOS los que coinciden con la descripción
            return tarea.descripcion !== descripcion
        }
    );
    if (listadoPorHacer.length === nuevoListado.length) {
        return false;
    } else {
        listadoPorHacer = nuevoListado;
        guardarDB();
        return true;
    }
}

module.exports = {
    crearTarea,
    listarTarea,
    actualizarTarea,
    borrarTarea
}