const mongoose = require('mongoose')

<<<<<<< HEAD
//Model Equipamentos
=======

//Read
//if(process.env.NODE_ENV == "production"){
   // module.exports = 
   //{
 
   // },
   //{
    //useNewUrlParser: true,
    //useUnifiedTopology: true
    //}
    //}


//Banco de dados equipamentos
//tabela inventario
>>>>>>> a79cb75b69e74732d575b7b44292ce8545796699

const Equips = mongoose.model('Equips',{
    //_id: Number,
    patrimonio: Number,
    equipamento: String,
    marca: String,
    modelo: String,
    serial: Number
})

module.exports = Equips

<<<<<<< HEAD
        
=======





>>>>>>> a79cb75b69e74732d575b7b44292ce8545796699

