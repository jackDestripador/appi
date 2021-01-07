const exprees=require('express');
const router =exprees.Router();
const pacienteController = require('../controllers/pacienteControlles.js');

module.exports =function(){
    
    // Agrega nuevos pacientes via POST

    router.post('/pacientes',
        pacienteController.nuevoCliente
    )

    return router;
}
