const express =require('express');
const mongoose =require('mongoose');
const routes =require('./routes');
const bodyParser = require('body-parser');

//Crear el servidor
const app= express();

// Conectar a mongoDB
mongoose.Promise =global.Promise;
mongoose.connect('mongodb://localhost/veterinario',{
    useNewUrlParser:true,
    useUnifiedTopology: true,
    useFindAndModify: false
});
// habilitar el body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


//Habilitar Routing

app.use('/',routes());

// puerto y arrancar el servido
app.listen(4000,()=>{
    console.log('Servidor funcionando')
})
