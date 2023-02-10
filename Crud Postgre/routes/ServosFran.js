const express = require('express');
const router = express.Router();

const servoFranDAO = require('../controller/ServosFranquiaDAO');

router.get('/home', (req, res) =>{
    servoFranDAO.homeSF(req, res);
})

router.get('/cadastro', (req, res) =>{
    servoFranDAO.preAddSF(req, res);
})

router.post('/cadastro', (req, res) =>{
    servoFranDAO.addSF(req, res);
})

router.get('/franquia-servo/:id', (req, res) =>{
    servoFranDAO.showAllServosFran(req, res);
})

router.get('/franquias-servo/delete/:idfran/:idservo', (req, res) =>{
    servoFranDAO.deleteSF(req, res);
})

module.exports = router;