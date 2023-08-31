const express = require('express');
const app = express();
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
        res.json({
            sucess: true,
            message: "Backend Equips_server ok!"
          
        })}catch(error){
        res.status(500).json({error: error})
    }
})

//Read
route.get('/equips', async (req, res) =>{
    try{
       const equips = await Equips.find()
       return  res.status(200).json({equips})
    }catch(error){
        res.status(500).json({error: error})
    }  
})

//Read 
route.get('/user', async (req, res) =>{

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
    return  res.status(201).json({message: "Pessoa inserida com sucesso"})
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
app.use (route)
    app.listen(PORT,()=>{
        console.log("Server Running => Port: " + `${PORT}`);
        })
