const express = require('express');
const router = express.Router();
const servosDAO = require('../controller/ServosDAO');

router.get('/home', (req, res) =>{
    servosDAO.showAllServos(req, res);
})

router.get('/cadastro', (req, res) =>{
    servosDAO.preAddServo(req, res);
})

router.post('/cadastro', (req, res) =>{
    servosDAO.addServo(req, res);
})

router.get('/delete/:id', (req, res)=>{
    servosDAO.deleteServos(req, res);
})

router.get('/atualizar/:id', (req, res) =>{
    servosDAO.showOneServo(req, res, 'servos/atualizar')
})

router.post('/atualizar/:id', (req, res) =>{
    servosDAO.updateServos(req, res);
})

module.exports = router;