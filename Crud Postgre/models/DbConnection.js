const Sequelize = require('sequelize');
const sequelize = new Sequelize('fateDB', 'emiya', '123456', {
    host: "localhost",
    dialect: 'postgres',
    define: {
        timestamps: false
    }
});

module.exports = {
    sequelize: sequelize,
    Sequelize: Sequelize,

    testeConexao : (() =>{
        sequelize.authenticate().then(()=>{
            console.log("Conectado com Sucesso!");
        }).catch((error) =>{
            console.log("Erro na conexão");
        })
    })
}