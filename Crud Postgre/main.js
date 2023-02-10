const express = require('express');
const app = express();
const db = require('./models/DbConnection');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const session = require('express-session');
const flash = require('connect-flash');

const path = require('path');


//Session
app.use(session({
    secret: "chavesessao",
    resave: true,
    saveUninitialized: true
}));
app.use(flash());

//Middleware
app.use((req, res, next) =>{
    res.locals.success_msg = req.flash("success_msg");
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
})

//Configurações Handlebars
app.engine('handlebars', handlebars.engine({defaultLayout: 'main', runtimeOptions:{
    allowProtoPropertiesByDefault: true,
    allowedProtoMethods: true
}}))
app.set('view engine', 'handlebars');

//BodyParser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//PATH
app.use(express.static(path.join(__dirname, ("/public"))));

//HOMEPAGE
app.get('/', (req, res) =>{
    res.render("homepage");
})

//ROTAS
const admin = require('./routes/Admin');
const servos = require('./routes/Servos');
const mestres = require('./routes/Mestres');
const franquias = require('./routes/Franquias');
const servoFran = require('./routes/ServosFran');

app.use('/admin', admin);
app.use('/servos', servos);
app.use('/mestres', mestres);
app.use('/franquias', franquias);
app.use('/servos_franquia', servoFran);

db.testeConexao();
const PORT = 8080;
app.listen(PORT, () =>{
    console.log("Rodando na porta: "+ PORT);

})