const db = require('../models/DbConnection');

const mestre = require('../models/Mestres');

const servos = db.sequelize.define('servos', {

    nome: {
        type: db.Sequelize.STRING
    },
    classe:{
        type: db.Sequelize.STRING
    },
    idade: {
        type: db.Sequelize.INTEGER
    },
    fkMestre: {
        type: db.Sequelize.INTEGER,
        references: {
            model: 'mestres',
            key: 'id'
        }
    }
} );

servos.belongsTo(mestre, {foreignKey: 'fkMestre', allowNull: false});

//servos.sync({force:true})

module.exports = servos;