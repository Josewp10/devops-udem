require('dotenv/config')

const config = {
    //SECRET_KEY:process.env.SECRET_KEY,
    SERVER:{
        port:3001
    },
    DB:{
        host:process.env.DB_HOST,
        port:5432,
        database:'devops',
        user:process.env.DB_USER,
        password: process.env.DB_PASSWORD
    }
}
module.exports = config