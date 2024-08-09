const mysql = require('mysql2/promise'); 
const config = require('../config');

const dbconfig = {
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT || 3306, 
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB,
    ssl: false 
};

let conexion;

async function conmysql() {
    try {
        conexion = await mysql.createConnection(dbconfig);
        console.log('DB conectada exitosamente');
    } catch (err) {
        console.error('[db error]', err);
        setTimeout(conmysql, 200);
    }

    conexion.on('error', (err) => {
        console.error('[db error]', err);
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            conmysql();
        } else {
            throw err;
        }
    });
}

conmysql();

async function todos(tabla) {
    try {
        const [rows] = await conexion.query(`SELECT * FROM ${tabla}`);
        return rows;
    } catch (error) {
        throw error;
    }
}

async function uno(tabla, id) {
    try {
        const [rows] = await conexion.query(`SELECT * FROM ${tabla} WHERE id = ?`, [id]);
        return rows[0];
    } catch (error) {
        throw error;
    }
}

async function agregar(tabla, data) {
    try {
        const [result] = await conexion.query(`INSERT INTO ${tabla} SET ?`, data);
        return result;
    } catch (error) {
        throw error;
    }
}

async function eliminar(tabla, id) {
    try {
        const [result] = await conexion.query(`DELETE FROM ${tabla} WHERE id = ?`, [id]);
        return result;
    } catch (error) {
        throw error;
    }
}

async function modificar(tabla, id, data) {
    try {
        const [result] = await conexion.query(`UPDATE ${tabla} SET ? WHERE id = ?`, [data, id]);
        return result;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    todos,
    uno,
    agregar,
    eliminar,
    modificar,
};
