const servos = require('../models/Servos');
const mestres = require('../models/Mestres');
const { Model } = require('sequelize');

module.exports = {

    preAddServo : (req, res) =>{
        mestres.findAll().then((mestres) =>{
            res.render('servos/cadastro', {mestres : mestres});
        })  
    },

    addServo : (req, res) =>{
            servos.create({
                nome: req.body.nome,
                classe: req.body.classe,
                idade: req.body.idade,
                fkMestre: req.body.mestres
            }).then(() =>{
                req.flash('success_msg', 'Servo Cadastrado');
                res.redirect('/servos/home');
            }).catch((error) =>{
                req.flash('error_msg', 'Erro no Cadastro do Servo'+error)
                res.redirect('/servos/home');
            })
    },

    showAllServos : (req, res) =>{
        servos.findAll({include: mestres}).then((servos) =>{
            /*return res.json({
                erro: false,
                servos
            }) */
            res.render('servos/home', {servos : servos});
        }).catch((error) =>{
            req.flash('error_msg', 'Falha na Exibição dos Servos');
        })
    },
    
    deleteServos : (req, res) =>{
        servos.destroy({where:{id: req.params.id}}).then(()=>{
            req.flash('success_msg', "Servo deletado com sucesso!")
            res.redirect('/servos/home');
        }).catch((error) =>{
            req.flash('error_msg', 'Falha ao apagar Servo: '+error);
        })
    },

    showOneServo : (req, res, view) =>{
        mestres.findAll().then((mestres) =>{
            servos.findByPk(req.params.id).then((servos)=>{
                res.render(view, {mestres : mestres, servos: servos});
            })
        })
    },

    updateServos : (req, res) =>{
        servos.update({
            nome: req.body.nome,
            classe: req.body.classe,
            idade: req.body.idade,
            fkMestre: req.body.mestres
        }, {where: {id:req.params.id}}).then(() => {
            req.flash('success_msg', 'Servo Atualizado com sucesso')
            res.redirect('/servos/home');
        }).catch((error) =>{
            req.flash('error_msg', 'Erro ao atualizar Servos')
            res.redirect('/servos/home');
        })
    }
}