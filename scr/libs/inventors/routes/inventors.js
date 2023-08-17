const express = require('express');
const router = express.Router();

router.get('/inventors',async (req,res)=>{
    try {
        res.send({ok:true,data:'Nice'})
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