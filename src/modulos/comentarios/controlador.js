const db = require('../../DB/mysql');

async function todos(TABLA) {
    return await db.todos(TABLA);
}

async function uno(TABLA, id) {
    return await db.uno(TABLA, id);
}

async function agregar(TABLA, data) {
    return await db.agregar(TABLA, data);
}

async function eliminar(TABLA, id) {
    return await db.eliminar(TABLA, id);
}

async function modificar(TABLA, id, data) {
    return await db.modificar(TABLA, id, data);
}

module.exports = {
    todos,
    uno,
    agregar,
    eliminar,
    modificar,
};
