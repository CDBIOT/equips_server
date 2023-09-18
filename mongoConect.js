const mongoose = require('mongoose')
require('dotenv').config()

<<<<<<< HEAD

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
=======
//Configuração do mongoose
const MONGODB_URI = 'mongodb+srv://'+process.env.DB_USER+':'+process.env.DB_PASS+'@cluster0.mvho6.mongodb.net/'+process.env.DB_NAME+'?retryWrites=true&w=majority'
>>>>>>> a79cb75b69e74732d575b7b44292ce8545796699
mongoose.connect(MONGODB_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
    }).then(() => {
    
    return console.log("MongodB conectado com sucesso!", connection.host);
})
.catch((err) => {
    console.log("Houve um erro ao se conectar ao mongodB inventário: " +err)
    console.log('DB_USER:'+process.env.DB_USER+'DB_PASS:'+process.env.DB_USER)
    //console.log(process.env)
})


