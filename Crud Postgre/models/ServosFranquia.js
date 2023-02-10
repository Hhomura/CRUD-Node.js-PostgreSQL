const db = require('../models/DbConnection')

const franquias = require('../models/Franquias');
const servos = require('../models/Servos');

const servoFranquia = db.sequelize.define('servo_fran', {
    fkServo: {
        type: db.Sequelize.INTEGER,
        references:{
            model: 'servos',
            key: 'id'
        }
    },
    fkFran: {
        type: db.Sequelize.INTEGER,
        references: {
            model: 'franquias',
            key: 'id'
        }
    }
})

servos.hasMany(servoFranquia, {foreignKey: 'fkServo'});
servoFranquia.belongsTo(servos, {foreignKey: 'fkServo'});
franquias.hasMany(servoFranquia, {foreignKey: 'fkFran'});
servoFranquia.belongsTo(franquias,{foreignKey: 'fkFran'});

// servoFranquia.sync({force:true});

module.exports = servoFranquia;
