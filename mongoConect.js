
const mongoose = require('mongoose')
require('dotenv').config()


//Banco de dados equipamentos
//tabela inventario

//const MONGODB_URI= "mondodb://localhost:27017"


//if(process.env.NODE_ENV == "production"){
   // module.exports = 
   //{
    const MONGODB_URI= 'mongodb+srv://'+process.env.DB_USER+':'+process.env.DB_PASS+'@cluster0.mvho6.mongodb.net/'
    +process.env.DB_NAME+'?retryWrites=true&w=majority'
   // },
   //{
   // useNewUrlParser: true,
    //useUnifiedTopology: true
    //}
    //}
mongoose.connect(MONGODB_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
    }).then(() => {
    
    return console.log("MongodB conectado com sucesso!", connection.host);
})
.catch((err) => {
    console.log("Houve um erro ao se conectar ao mongodB inventário: " +err)
})


