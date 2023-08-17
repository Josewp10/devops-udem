const ServicePg = require('../../../database/postgres');
const _pg = new ServicePg();

export default class InventorsDAO{
    async getInventors(){
        let sql = `SELECT id, name FROM public."Inventors";`
        return  await _pg.executeSQL(sql);
        
    }

    async postInventor(inventor){

    }

    async putInventor(inventor){

    }

    async deleteInventor(inventor_id){

    }
}