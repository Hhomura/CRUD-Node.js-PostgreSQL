const db = require("../models/DbConnection");

const mestres = db.sequelize.define('mestres', {
    nome: {
        type: db.Sequelize.STRING
    },
idade: {
    type: db.Sequelize.INTEGER
}

})

//mestres.sync({force: true});

module.exports = mestres;