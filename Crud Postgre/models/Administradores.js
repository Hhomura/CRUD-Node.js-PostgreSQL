const db = require('../models/DbConnection');

const admin = db.sequelize.define('Administradores', {
    
    nome:{
        type: db.Sequelize.STRING
    },
    email:{
        type: db.Sequelize.STRING
    },
    password: {
        type: db.Sequelize.STRING
    }
    
})

admin.sync({force:true})

module.exports = admin;