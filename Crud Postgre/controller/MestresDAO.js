const mestres = require('../models/Mestres');

module.exports = {

    addMestre : (req, res) =>{
        mestres.create({
            nome: req.body.nome,
            idade: req.body.idade
        }).then(() =>{
            req.flash("success_msg", "Mestre Adicionado com sucesso!");
            res.redirect("/mestres/home");
        }).catch((error) =>{
            req.flash("error_msg", "Erro no Cadastro! "+error);
            res.redirect('/mestres/home');
        })
    },

    showAllMestres : (req, res) =>{
        mestres.findAll().then((mestres) =>{
            res.render('mestre/home', {mestres: mestres})
        }).catch((error) =>{
            res.redirect('/mestres/home');
            req.flash("error_msg", "Erro na Exibção dos Alunos: "+ error)
        })
    },

    deleteMestre : (req, res) =>{
        mestres.destroy({where: {id: req.params.id}}).then(() =>{
            req.flash("success_msg", 'Dado Deletado com Sucesso!');
            res.redirect("/mestres/home");
        }).catch((error) =>{
            req.flash("error_msg", "Erro ao deletar");
            res.redirect("/mestres/home")
        })
    },

    //EXIBIÇÃO DE APENAS UM
    exibirMestre : (req, res, view) =>{
        mestres.findByPk(req.params.id).then((mestres) =>{
            res.render(view, {mestres:mestres})
        }).catch((error) =>{
            req.flash("error_msg", "Erro ao selecionar mestre");
            res.redirect('/mestres/home');
        })
    },

    updateMestre : (req, res) =>{
        mestres.update({
            nome: req.body.nome,
            idade: req.body.idade
        },
        {where:{id:req.params.id}}).then(() =>{
            req.flash('success_msg', 'Dados Atualizado!');
            res.redirect('/mestres/home');
        }).catch((error) =>{
            req.flash('error_msg', 'Erro ao atualizar: '+error);
            res.redirect('/mestres/home');
        })
    }

}