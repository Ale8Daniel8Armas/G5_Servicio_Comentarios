require('dotenv').config();

module.exports = {
    app: {
        port: process.env.PORT || 7040,
    },
    mysql: {
        host: process.env.MYSQL_HOST  ||  'localhost',
        port: process.env.MYSQL_PORT || '4040', 
        user: process.env.MYSQL_USER  ||  'root',
        password: process.env.MYSQL_PASSWORD ||  'rootroot',
        database: process.env.MYSQL_DB ||  'dbmicroservicio',
    }
}