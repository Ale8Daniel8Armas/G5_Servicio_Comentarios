const db = require('../../DB/mysql');

function todos(TABLA) {
    return db.todos(TABLA);
}

function uno(TABLA, id) {
    return db.uno(TABLA, id);
}

function agregar(TABLA, data) {
    return db.agregar(TABLA, data);
}

function eliminar(TABLA, id) {
    return db.eliminar(TABLA, id);
}

function modificar(TABLA, id) {
    return db.modificar(TABLA, id);
}

module.exports = {
    todos,
    uno,
    agregar,
    eliminar,
    modificar,
};
