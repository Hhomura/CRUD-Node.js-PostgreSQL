const db = require('../models/DbConnection');

const franquias = db.sequelize.define('franquias', {
    nome: {
        type: db.Sequelize.STRING
    },
    descricao:{
        type: db.Sequelize.TEXT
    },
})

//franquias.sync({force:true})

module.exports = franquias;