const express = require('express');
const router = express.Router();

const {InventorsController} = require('../controllers/inventors');
const _inventors = new InventorsController;

router.get('/inventors',async (req,res)=>{
    try {
        let resp = await _inventors.getInventors();
        res.send({ok:true,data:resp})
    } catch (error) {
        res.send({ok:false,error:error})
    }
})

router.post('/inventors',async (req,res)=>{
    try {
        let body = req.body;
        await _inventors.postInventor(body);
        res.send({ok:true,message:'Inventor data saved'})
    } catch (error) {
        res.send({ok:false,error:error})
    }
})

router.put('/inventors',async (req,res)=>{
    try {
        let body = req.body;
        await _inventors.putInventor(body);
        res.send({ok:true,message:'Inventor data updated'})
    } catch (error) {
        res.send({ok:false,error:error})
    }
})

router.delete('/inventors',async (req,res)=>{
    try {
        let id = req.query.id;
        await _inventors.deleteInventor(id);
        res.send({ok:true,message:'Inventor data deleted'})
    } catch (error) {
        res.send({ok:false,error:error})
    }
})

module.exports = router;