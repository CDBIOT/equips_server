const express = require('express');
const app = express();
<<<<<<< HEAD
const route = express.Router("./rotas_equips, ./rotas_user ");
const Equips = require("../db_equips")
const Person = require('../db_user')
const cors = require('cors');
const { getEquips, postEquip } = require('../rotas_equips');
require('dotenv').config()

app.use(cors());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin","https://equip-vercel-theta.vercel.app");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, X-Content-Type-Options:nosniff, Accept,Authorization");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE, OPTIONS");
    console.log('Cors habilitado')
    next();
});

app.get('/', (req, res) =>{
=======
const mongoose = require('mongoose')
const route = express.Router('../rotas_user');
const Equips = require('../db_equips')
const Person = require('../db_user')
const db = require('../mongoConect')

require('dotenv').config()

const cors = require('cors')
  

route.use(cors());

route.use((req, res, next) => {
    console.log("Cors habilitado");
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Header",'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if (req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods','GET,PUT, POST, PATCH, DELETE');
        res.status(200).send({})
    }

    next()
    })
    
//Read
route.get('/', (req, res) =>{
    try{
>>>>>>> a79cb75b69e74732d575b7b44292ce8545796699
        res.json({
            sucess: true,
            message: "Backend Equips_server ok!"
          
        })}catch(error){
        res.status(500).json({error: error})
    }
})

//Read
app.get('/equips', getEquips)

 //Create temps
 app.post('/equips', postEquip )

//Read 
app.get('/user', async (req, res) =>{

    try{
        const people = await Person.find()
        return res.status(200).json({people})
    }catch(error){
        res.status(500).json({error: error})
    }  
})

 //Create
 app.post('/user', async (req, res) =>{
    const {nome, sobrenome, idade } = req.body
    const person = {
        nome,sobrenome,idade
                    }
    try{
    await Person.create(person)
    return  res.status(201).json({message: "Pessoa inserida com sucesso"})
    }catch(error){
        res.status(500).json({error: error})
    }  
})

    
<<<<<<< HEAD

app.use('/', express.static(__dirname + '/'))
=======
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
>>>>>>> a79cb75b69e74732d575b7b44292ce8545796699
    
    

const PORT = process.env.PORT || 4000;
app.use (route)
    app.listen(PORT,()=>{
        console.log("Server Running => Port: " + `${PORT}`);
        })
