exports.success = function(req, res, mensaje, status) {
    const statuscode = status || 200;
    const mensajeOk = mensaje || '';
    res.status(status).send({
        error: false,
        status: status,
        body: mensaje
    });
}

exports.error = function(req, res, mensaje, status){
    const statuscode = status || 500;
    const mensajeError = mensaje || 'ErrorInterno';
    res.status(status).send({
        error: false,
        status: status,
        body: mensaje
    }
)};