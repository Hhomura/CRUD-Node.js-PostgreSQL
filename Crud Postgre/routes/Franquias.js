const express = require('express');
const router = express.Router();
const franDAO = require('../controller/FranquiasDAO');

router.get('/home', (req, res) =>{
    franDAO.showAllFranquias(req, res);
})

router.get('/cadastro', (req, res) =>{
    res.render('franquias/cadastro');
})

router.post('/cadastro', (req, res) =>{
    franDAO.addFranquia(req, res);
})

router.get('/delete/:id', (req,res) =>{
    franDAO.deleteFran(req, res);
})

router.get('/atualizar/:id', (req, res) =>{
    franDAO.showOneFran(req, res, 'franquias/atualizar')
})

router.post('/atualizar/:id', (req, res) =>{
    franDAO.updateFran(req, res);
})

module.exports = router;