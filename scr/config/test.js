require('dotenv/config')

const config = {
    //SECRET_KEY:process.env.SECRET_KEY,
    SERVER:{
        port:3001
    },
    DB:{
        host:'localhost',
        port:5431,
        database:'devops',
        user:'devops',
        password: 'devops'
    }
}
module.exports = config