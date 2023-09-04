const {InventorsDAO} = require('../DAO/inventors');
const _inventors = new InventorsDAO;

class InventorsController{

    async getInventors(){
        return await _inventors.getInventors();
    }

    async postInventor(inventor){
        await _inventors.postInventor(inventor);
    }

    async putInventor(inventor){
        await _inventors.putInventor(inventor);
    }

    async deleteInventor(inventor_id){
        await _inventors.deleteInventor(inventor_id);
    }
}

module.exports={InventorsController}