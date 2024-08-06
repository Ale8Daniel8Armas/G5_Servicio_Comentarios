const express = require('express');
const respuestas = require('../../red/respuesta');
const controlador = require('./controlador');

const router = express.Router();

// Métodos tabla comentarios
router.get('/', async function (req, res) {
    try {
        const items = await controlador.todos("pacientes");
        respuestas.success(req, res, items, 200);
    } catch (error) {
        respuestas.error(req, res, error.message, 500);
    }
});

router.get('/:id', async function (req, res) {
    try {
        const id = req.params.id;
        const item = await controlador.uno("pacientes",id);
        if (item) {
            respuestas.success(req, res, item, 200);
        } else {
            respuestas.error(req, res, 'Paciente no encontrado', 404);
        }
    } catch (error) {
        respuestas.error(req, res, error.message, 500);
    }
});

router.post('/', async function (req, res) {
    try {
        const data = req.body;
        const resultado = await controlador.agregar("pacientes",data);
        respuestas.success(req, res, resultado, 201);
    } catch (error) {
        respuestas.error(req, res, error.message, 500);
    }
});

router.delete('/:id', async function (req, res) {
    try {
        const id = req.params.id;
        const resultado = await controlador.eliminar("pacientes", id);
        if (resultado.affectedRows > 0) {
            respuestas.success(req, res, `Paciente con id ${id} eliminado`, 200);
        } else {
            respuestas.error(req, res, 'Paciente no encontrado', 404);
        }
    } catch (error) {
        respuestas.error(req, res, error.message, 500);
    }
});

router.put('/:id', async function (req, res) {
    try {
        const id = req.params.id;
        const data = req.body;
        const resultado = await controlador.modificar("pacientes", id, data);
        if (resultado.affectedRows > 0) {
            respuestas.success(req, res, `Paciente con id ${id} modificado`, 200);
        } else {
            respuestas.error(req, res, 'Paciente no encontrado', 404);
        }
    } catch (error) {
        respuestas.error(req, res, error.message, 500);
    }
});

module.exports = router;
