const {pool, Pool} = require('pg');
const config = require('config');
const dbConfig = config.get('DB')

class ServicePg {
    
    constructor(){
        this.pool = new Pool(dbConfig);
    }

// Ejecuta la clase y el metodo se debe hacer
// de forma asincrona para que respuesta tenga un valor
  
async executeSQL(sql,params) {
    let response = await this.pool.query(sql,params);
    return response;
  }
}


module.exports = ServicePg;