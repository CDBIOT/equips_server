const mongoose = require('mongoose')

//Configuração do mongoose
//mongoose.Promise = global.Promise;

//MONGODB_URI= "mongodb+srv://cdb:abcdeF12345@cluster0.mvho6.mongodb.net/test"

const MONGODB_URI= 'mongodb+srv://'+process.env.DB_USER+':'+process.env.DB_PASS+'@cluster0.mvho6.mongodb.net/'
+process.env.DB_NAME+'?retryWrites=true&w=majority'
useNewUrlParser: true
//mongodb+srv://cdb:<faculdade18>@cluster0.mvho6.mongodb.net/?retryWrites=true&w=majority
//try{
//mongoose.connect('./db_atlas.MONGODB_URI').then(() => {
mongoose.connect(MONGODB_URI).then(() => {
    console.log("MongodB temps conectado com sucesso!")

})
.catch((err) => {
    console.log("Houve um erro ao se conectar ao mongodB temps: "+err)
})

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

//Model Temperaturas Dia Mes Ano

const Equips = mongoose.model('Equips',{
    //_id: Number,
    patrimonio: Number,
    equipamento: String,
    marca: String,
    modelo: String,
    serial: Number
})

module.exports = Equips








