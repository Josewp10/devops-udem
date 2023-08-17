const ServicePg = require('../../../database/postgres');
const _pg = new ServicePg();

class InventorsDAO{
    async getInventors(){
        let sql = `SELECT id, name FROM public."Inventors";`
        return  await _pg.executeSQL(sql);
    }

    async postInventor(inventor){
        let sql = `INSERT INTO public."Inventors"(name) VALUES ($1);`
        let VALUES = [inventor.name];
        return await _pg.executeSQL(sql,VALUES);
    }

    async putInventor(inventor){
        let sql = `UPDATE public."Inventors" SET name=$1 WHERE id=$2`
        let VALUES = [inventor.name, inventor.id];
        return await _pg.executeSQL(sql,VALUES);
    }

    async deleteInventor(inventor_id){
        let sql = `DELETE FROM public."Inventors" WHERE id=$1;`
        let VALUES = [inventor_id];
        return await _pg.executeSQL(sql,VALUES);
    }
}

module.exports={
    InventorsDAO
}