const franquias = require('../models/Franquias')

module.exports = {

    addFranquia : (req, res) => {
        franquias.create({
            nome: req.body.nome,
            descricao: req.body.descricao
        }).then(() =>{
            req.flash('success_msg', 'Cadastro da Franquia feito com sucesso!');
            res.redirect('/franquias/home');
        }).catch((error)=>{
            req.flash('error_msg', 'Erro no cadastro da franquia')
        })
    },

    showAllFranquias : (req, res) =>{
        franquias.findAll().then((franquias) =>{
            res.render('franquias/home', {franquias:franquias})
        }).catch((error) =>{
            req.flash('error_msg', 'Erro no encontro das Franquias: '+error);
            res.redirect('/franquias/home');
        })
    },

    deleteFran : (req, res) =>{
        franquias.destroy({where:{id: req.params.id}}).then(() =>{
            req.flash('success_msg', 'Deletado com sucesso!');
            res.redirect('/franquias/home');
        }).catch((error) =>{
            req.flash('error_msg', 'Erro ao deletar: '+error);
            res.redirect('/franquias/home');
        })
    },

    showOneFran : (req, res, view) =>{
        franquias.findByPk(req.params.id).then((franquia) =>{
            res.render(view, {franquia : franquia});
        }).catch((error) =>{
            req.flash('error_msg', 'Erro na Busca da franquia: '+ error);
            res.redirect('franquias/home');
        })
    },

    updateFran : (req, res) =>{
        franquias.update({
            nome: req.body.nome,
            descricao: req.body.descricao
        }, {where:{id:req.params.id}}).then(() =>{
            req.flash('success_msg', 'Franquia atualizada com sucesso!')
            res.redirect('/franquias/home')
        }).catch((error) =>{
            req.flash('error_msg', 'Falha na atualização: '+error);
            res.redirect('/franquias/home');
        })
    }
}