const express = require('express');
const router = express.Router();

const {InventionsController} = require('../controllers/inventions');
const _Inventions = new InventionsController;

router.get('/inventions',async (req,res)=>{
    try {
        let resp = await _Inventions.getInventions();
        res.send({ok:true,data:resp})
    } catch (error) {
        res.send({ok:false,error:error})
    }
})

router.post('/inventions',async (req,res)=>{
    try {
        let body = req.body;
        await _Inventions.postInvention(body);
        res.send({ok:true,message:'Invention data saved'})
    } catch (error) {
        res.send({ok:false,error:error})
    }
})

router.put('/inventions',async (req,res)=>{
    try {
        let body = req.body;
        await _Inventions.putInvention(body);
        res.send({ok:true,message:'Invention data updated'})
    } catch (error) {
        res.send({ok:false,error:error})
    }
})

router.delete('/inventions',async (req,res)=>{
    try {
        let id = req.query.id;
        await _Inventions.deleteInvention(id);
        res.send({ok:true,message:'Invention data deleted'})
    } catch (error) {
        res.send({ok:false,error:error})
    }
})

module.exports = router;