const mongoose = require('mongoose')

//Model Equipamentos

const Equips = mongoose.model('Equips',{
    //_id: Number,
    patrimonio: Number,
    equipamento: String,
    marca: String,
    modelo: String,
    serial: Number
})

module.exports = Equips

        

