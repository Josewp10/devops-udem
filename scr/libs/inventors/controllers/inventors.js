const {InventorsDAO} = require('../DAO/inventors');
const _inventors = new InventorsDAO;

class InventorsController{

    async getInventors(){
        return await _inventors.getInventors();
    }

    async postInventor(inventor){

    }

    async putInventor(inventor){

    }

    async deleteInventor(inventor_id){

    }
}

module.exports={InventorsController}