const sf = require('../models/ServosFranquia');

const { Op } = require("sequelize");

const servos = require('../models/Servos');
const franquias = require('../models/Franquias');

module.exports = {

    homeSF : (req, res) =>{
        franquias.findAll().then((franquias) =>{
            res.render('servos_franquia/home', {franquias:franquias})
        }).catch((error) =>{
            req.flash('error_msg', 'Erro na busca das Franquias: ' + error);
                res.redirect('/servos_franquia/home');
        })
    },

    preAddSF: (req, res) => {
        servos.findAll().then((servos) => {
            franquias.findAll().then((franquias) => {
                res.render('servos_franquia/cadastro', { servos: servos, franquias: franquias })
            }).catch((error) => {
                req.flash('error_msg', 'Erro na busca das Franquias: ' + error);
                res.redirect('/servos_franquia/home');
            })
        }).catch((error) => {
            req.flash('error_msg', 'Erro na busca dos Servos: ' + error);
            res.redirect('/servos_franquia/home');
        })
    },

    addSF: (req, res) => {
        sf.create({
            fkServo: req.body.servos,
            fkFran: req.body.franquias
        }).then(() => {
            req.flash('success_msg', 'Vinculo feito com sucesso');
            res.redirect('/servos_franquia/home');
        }).catch((error) => {
            req.flash('error_msg', 'Erro no vínculo');
            res.redirect('/servos_franquia/home')
        })
    },

    showAllServosFran : (req, res) =>{
        sf.findAll({where:{fkFran:req.params.id}, include:[{model:servos}]}).then((servos) =>{
            /* return res.json({
                erro: false,
                servos
            }) */
            console.log(servos);
            res.render('servos_franquia/servos', {servos:servos});

        }).catch((error) =>{
            req.flash('error_msg', 'Erro na busca dos Servos: ' + error);
            res.redirect('/servos_franquia/home');
        })
    },
    deleteSF : (req, res) =>{
        sf.destroy({where:{ [Op.and]:[{fkServo: req.params.idservo, fkFran: req.params.idfran}]}}).then(() =>{
            req.flash('success_msg', 'Desvinculado com sucesso!');
            res.redirect('/servos_franquia/home');
        }).catch((error) =>{
            req.flash('error_msg', 'Erro na desvinculação: ' + error);
            res.redirect('/servos_franquia/home');
        })
    }

}