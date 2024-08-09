Tecnologias implementadas:

- Express
- JavaScript
- MySQL

Para ejecutar el proyecto primero se deben instalar las dependencias de node con express y morgan

1) npm i express nodemon
2) npm i dotenv -D
3) npm i mysql
4) npm i morgan

Para le ejecucion escriba el siguiente comando:

- npm run dev

El puerto escucha asignado para el backend es el 7040.

El servicio esta ahora dockerizado y el puerto de la base es el 4040:3306 

se notifica un error de inicio de carga, es porque el nodo levantado para la app cae al momento de la creacion y
ejecucion del docker compose.
Para el caso, debe volver a ejecutar el nodo de la app creada y todo volvera a funcionar
normalmente.