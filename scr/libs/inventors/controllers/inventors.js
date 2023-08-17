const InventorsDAO = require('../DAO/inventors');
const _inventors = new InventorsController;

export default class InventorsController{

    async getInventors(){
        return _inventors.getInventors();
    }

    async postInventor(inventor){

    }

    async putInventor(inventor){

    }

    async deleteInventor(inventor_id){

    }
}