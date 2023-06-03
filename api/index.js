const express = require('express');
const app = express();
const mongoose = require('mongoose')
const route = express.Router("./rotas_equips,./rotas_user, ./mqtt");
const Equips = require("../db_equips")
const Person = require('../db_user')

require('dotenv').config()
app.use (route)

//Read
//if(process.env.NODE_ENV == "production"){
   // module.exports = 
   //{
    const MONGODB_URI= 'mongodb+srv://'+process.env.DB_USER+':'+process.env.DB_PASS+'@cluster0.mvho6.mongodb.net/'
    +process.env.DB_NAME+'?retryWrites=true&w=majority'
   // },
   //{
    useNewUrlParser: true,
    //useUnifiedTopology: true
    //}
    //}

mongoose.connect(MONGODB_URI).then(db => 
    console.log("MongodB conectado com sucesso!", db.connection.host))
 .catch((err) => {
    console.log("Houve um erro ao se conectar ao mongodB: " + err)
})
        
//Model Equipamentos
        
// const Equips = mongoose.model('Equips',{
//     //_id: Number,
//     patrimonio: Number,
//     equipamento: String,
//     marca: String,
//     modelo: String,
//     serial: Number
// })
        
const cors = require('cors')

route.use(cors());

route.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", 'https://equips-server.vercel.app');
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, X-Content-Type-Options:nosniff, Accept,Authorization");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE, OPTIONS");
    console.log('Cors habilitado')
    next();
});

route.get('/', (req, res) =>{
        res.json({
            sucess: true,
            message: "Backend Equips_server ok!"
        })
})

//Read
route.get('/equips', async (req, res) =>{
    try{
       const equips = await Equips.find()
        res.status(200).json({equips})
    }catch(error){
        res.status(500).json({error: error})
    }  
})

//Read 
route.get('/user',checkToken, async (req, res) =>{

    try{
        const people = await Person.find()
        return res.status(200).json({people})
    }catch(error){
        res.status(500).json({error: error})
    }  
})

 //Create
 route.post('/user', async (req, res) =>{
    const {nome, sobrenome, idade } = req.body
    const person = {
        nome,sobrenome,idade
                    }
    try{
        await Person.create(person)
        res.status(201).json({message: "Pessoa inserida com sucesso"})
    }catch(error){
        res.status(500).json({error: error})
    }  
})

    
 //Create temps
 route.post('/equips', async (req, res) =>{
    const {patrimonio, equipamento, marca, modelo, serial } = req.body
       // const temps = req.params
    const equips = {patrimonio, equipamento, marca, modelo, serial }
    const create_equip = new Equips(req.body);
    //temps.save()
        try{
            await Equips.create(equips)
            //temps.save()
            console.log(equips)
            res.status(201).json({message: "Equipamento cadastrado com sucesso"})
            }catch(error){
            res.status(500).json({error: error})
        }  
    })

const PORT = process.env.PORT || 4000;

    app.listen(PORT,()=>{
        console.log("Server Running => Port: " + `${PORT}`);
        })
