const ServicePg = require('../../../database/postgres');
const _pg = new ServicePg();

class InventionsDAO{
    async getInventions(){
        let sql = `SELECT public."Inventions".id, public."Inventions".name, year, description, 
                inventor as inventor_id,  public."Inventors".name as inventor
                FROM public."Inventions"
                inner join public."Inventors" on inventor=public."Inventors".id`
        return  await _pg.executeSQL(sql);
    }

    async postInvention(invention){
        let sql = `INSERT INTO public."Inventions"(name, year, description, inventor)
                    VALUES ($1, $2, $3, $4);`
        let VALUES = [invention.name, invention.year, invention.description, invention.inventor];
        return await _pg.executeSQL(sql,VALUES);
    }

    async putInvention(invention){
        let sql = `UPDATE public."Inventions" SET 
                    name=$1,  year=$2, description=$3, inventor=$4 WHERE id=$5`
        let VALUES = [invention.name,invention.year, invention.description, invention.inventor, invention.id];
        return await _pg.executeSQL(sql,VALUES);
    }

    async deleteInvention(invention_id){
        let sql = `DELETE FROM public."Inventions" WHERE id=$1;`
        let VALUES = [invention_id];
        return await _pg.executeSQL(sql,VALUES);
    }
}

module.exports={
    InventionsDAO
}