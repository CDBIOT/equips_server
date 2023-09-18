const express = require('express');
const app = express();
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
        res.json({
            sucess: true,
            message: "Backend Equips_server ok!"
        })
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

    

app.use('/', express.static(__dirname + '/'))
    
app.get("/index.html",function(req,res){
        res.sendFile(__dirname + "/index.html");
    });
const PORT = process.env.PORT || 4000;

    app.listen(PORT,()=>{
        console.log("Server Running => Port: " + `${PORT}`);
        })
