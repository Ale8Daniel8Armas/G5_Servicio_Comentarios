CREATE TABLE IF NOT EXISTS comentarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    comentario TEXT NOT NULL,
    usuario VARCHAR(255),
    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO comentarios (comentario, usuario) VALUES ('Este es un comentario de prueba.', 'Usuario1');
INSERT INTO comentarios (comentario, usuario) VALUES ('Otro comentario de prueba.', 'Usuario2');
INSERT INTO comentarios (comentario, usuario) VALUES ('Quiero Pizzaaa.', 'Usuario3');
INSERT INTO comentarios (comentario, usuario) VALUES ('Y yo quiero milanesaaa.', 'Usuario4');
INSERT INTO comentarios (comentario, usuario) VALUES ('Con papas y picamenta, no se que es eso.', 'Usuario5');
INSERT INTO comentarios (comentario, usuario) VALUES ('Grupo 5 Web Avanzada.', 'Usuario6');