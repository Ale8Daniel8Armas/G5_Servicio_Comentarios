const express = require('express');
const respuestas = require('../../red/respuesta');
const controlador = require('./controlador');

const router = express.Router();

// Métodos tabla comentarios
router.get('/', async function (req, res) {
    try {
        const items = await controlador.todos("comentarios");
        respuestas.success(req, res, items, 200);
    } catch (error) {
        respuestas.error(req, res, error.message, 500);
    }
});

router.get('/:id', async function (req, res) {
    try {
        const id = req.params.id;
        const item = await controlador.uno("comentarios",id);
        if (item) {
            respuestas.success(req, res, item, 200);
        } else {
            respuestas.error(req, res, 'Comentario no encontrado', 404);
        }
    } catch (error) {
        respuestas.error(req, res, error.message, 500);
    }
});

router.post('/', async function (req, res) {
    try {
        const data = req.body;
        const resultado = await controlador.agregar("comentarios",data);
        respuestas.success(req, res, resultado, 201);
    } catch (error) {
        respuestas.error(req, res, error.message, 500);
    }
});

router.delete('/:id', async function (req, res) {
    try {
        const id = req.params.id;
        const resultado = await controlador.eliminar("comentarios", id);
        if (resultado.affectedRows > 0) {
            respuestas.success(req, res, `Comentario con id ${id} eliminado`, 200);
        } else {
            respuestas.error(req, res, 'Comentario no encontrado', 404);
        }
    } catch (error) {
        respuestas.error(req, res, error.message, 500);
    }
});

router.put('/:id', async function (req, res) {
    try {
        const id = req.params.id;
        const data = req.body;
        const resultado = await controlador.modificar("comentarios", id, data);
        if (resultado.affectedRows > 0) {
            respuestas.success(req, res, `Comentario con id ${id} modificado`, 200);
        } else {
            respuestas.error(req, res, 'Comentario no encontrado', 404);
        }
    } catch (error) {
        respuestas.error(req, res, error.message, 500);
    }
});

module.exports = router;
