const express = require('express');
const router = express.Router();
const mestreDAO = require('../controller/MestresDAO')

router.get('/home', (req, res) =>{
    mestreDAO.showAllMestres(req, res);
})

router.get('/cadastro', (req, res) =>{
    res.render('mestre/cadastro');
})

router.post('/cadastro', (req, res) =>{
    mestreDAO.addMestre(req, res);
})

router.get('/delete/:id', (req, res) =>{
    mestreDAO.deleteMestre(req, res)
})

router.get('/atualizar/:id', (req, res) =>{
    mestreDAO.exibirMestre(req, res, 'mestre/atualizar');
})

router.post('/atualizar/:id', (req, res) =>{
    mestreDAO.updateMestre(req, res);
})

module.exports = router;