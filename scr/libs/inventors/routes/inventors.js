const express = require('express');
const router = express.Router();

const {InventorsController} = require('../controllers/inventors');
const _inventors = new InventorsController;

router.get('/inventors',async (req,res)=>{
    try {
        let resp = await _inventors.getInventors();
        res.send({ok:true,data:resp})
    } catch (error) {
        res.send({ok:true,error:error})
    }
})

router.post('/inventors',async (req,res)=>{
    try {
        res.send({ok:true,data:'Nice'})
    } catch (error) {
        res.send({ok:true,error:error})
    }
})

router.put('/inventors',async (req,res)=>{
    try {
        res.send({ok:true,data:'Nice'})
    } catch (error) {
        res.send({ok:true,error:error})
    }
})

router.delete('/inventors',async (req,res)=>{
    try {
        res.send({ok:true,data:'Nice'})
    } catch (error) {
        res.send({ok:true,error:error})
    }
})

module.exports = router;