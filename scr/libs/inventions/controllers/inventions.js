const {InventionsDAO} = require('../DAO/inventions');
const _Inventions = new InventionsDAO;

class InventionsController{

    async getInventions(){
        return await _Inventions.getInventions();
    }

    async postInvention(Invention){
        await _Inventions.postInvention(Invention);
    }

    async putInvention(Invention){
        await _Inventions.putInvention(Invention);
    }

    async deleteInvention(Invention_id){
        await _Inventions.deleteInvention(Invention_id);
    }
}

module.exports={InventionsController}