const mongoose = require('mongoose')


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

const Equips = mongoose.model('Equips',{
    //_id: Number,
    patrimonio: Number,
    equipamento: String,
    marca: String,
    modelo: String,
    serial: Number
})

module.exports = Equips







