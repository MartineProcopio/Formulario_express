require('dotenv').config()//enciende las variables de entorno

const config = {
    server: {
        port : process.env.PORT ?? 3000
    }
}

module.exports = config