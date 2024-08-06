const mysql = require('mysql');
const config = require('../config');

const dbconfig = {
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database,
};

let conexion;

function conmysql() {
    conexion = mysql.createConnection(dbconfig);

    conexion.connect((err) => {
        if (err) {
            console.log('[db error]', err);
            setTimeout(conmysql, 200);
        } else {
            console.log('DB conectada exitosamente');
        }
    });

    conexion.on('error', (err) => {
        console.log('[db error]', err);
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            conmysql();
        } else {
            throw err;
        }
    });
}

conmysql();

function todos(tabla) {
    return new Promise((resolve, reject) => {
        conexion.query(`SELECT * FROM ${tabla}`, (error, result) => {
            if (error) return reject(error);
            resolve(result);
        });
    });
}

function uno(tabla, id) {
    return new Promise((resolve, reject) => {
        conexion.query(`SELECT * FROM ${tabla} WHERE id = ?`, [id], (error, result) => {
            if (error) return reject(error);
            resolve(result[0]);
        });
    });
}

function agregar(tabla, data) {
    return new Promise((resolve, reject) => {
        conexion.query(`INSERT INTO ${tabla} SET ?`, data, (error, result) => {
            if (error) return reject(error);
            resolve(result);
        });
    });
}

function agregarFecha(tabla, data) {
    return new Promise((resolve, reject) => {
        try {
            // Convertir la fecha antes de insertar
            data.fecha = convertirFecha(data.fecha);
            const sql = 'INSERT INTO ?? SET ?';
            conexion.query(sql, [tabla, data], (error, result) => {
                if (error) return reject(error);
                resolve(result);
            });
        } catch (error) {
            reject(error);
        }
    });
}


function eliminar(tabla, id) {
    return new Promise((resolve, reject) => {
        conexion.query(`DELETE FROM ${tabla} WHERE id = ?`, [id], (error, result) => {
            if (error) return reject(error);
            resolve(result);
        });
    });
}

function modificar(tabla, id, data) {
    return new Promise((resolve, reject) => {
        conexion.query(`UPDATE ${tabla} SET ? WHERE id = ?`, [data, id], (error, result) => {
            if (error) return reject(error);
            resolve(result);
        });
    });
}

function convertirFecha(fecha) {
    const partes = fecha.split('-');
    return `${partes[2]}-${partes[1]}-${partes[0]}`; // Convierte DD-MM-YYYY a YYYY-MM-DD
}

module.exports = {
    todos,
    uno,
    agregar,
    agregarFecha,
    eliminar,
    modificar,
};
