const express = require('express');
const route = express.Router();

const Person = require('./user')

var fs = require('fs');
//const Temps = require('./temps')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


 //Create
route.post('/user', async (req, res) =>{
    const {nome, email, senha } = req.body
    const person = { nome,email,senha }
    try{
        await Person.create(person)
        res.status(201).json({message: "Pessoa inserida com sucesso"})
    }catch(error){
        res.status(500).json({error: error})
    }  
})

//Read
route.get('/user', async (req, res) =>{
    try{
       const people = await Person.find()
        res.status(200).json({people})
    }catch(error){
        res.status(500).json({error: error})
    }  
})

//Cadastrar
route.post('/cadastrar', async (req, res) =>{

    const senha= await bcrypt.hash("123456", 8);
    console.log(senha);
    return res.json({
            erro: false,
            message:  'Usuário cadastrado com sucesso'
        });
})

//Login
route.post('/login', async (req, res) =>{
    try{
       const people = await Person.findOne({
        attributes: ['nome', 'email', 'senha']

    })
        //res.status(200).json({people})
        res.status(422).json({message:  'Usuário encontrado'});
    }catch(error){
        res.status(500).json({error: error})
        res.status(422).json({message:  'Usuário não encontrado'});
    }  
})
//Update
route.patch('/user/:id',async (req, res) =>{
    const id = req.params.id
    const {nome,sobrenome,idade} = req.body
    const person = {nome,email,senha,}
    try{
     const updatePerson = await Person.updateOne({_id: id},person);
     res.status(200).json(person);
    }catch(error){
    res.status(500).json({error: error})
}  
})

 //Delete
route.delete('/user/:id', async (req, res) => {
    const id= req.params.id
    const person = await Person.findOne({_id: id})
    if(!person){
    res.status(422).json({message:  'Usuário não encontrado'});
    console.log('usuario não encontrado')
    return
    }
    try{
        await Person.deleteOne({_id: id});
        res.status(200).json({message: 'Usuário removido com sucesso'});
        console.log('usuario removido')
    }catch(error){
    res.status(500).json({error: error})
    console.log('usuario não removido')
}  
});


route.use('/', express.static(__dirname + '/'))
route.use('/css', express.static("/css"))
route.use('/imagens', express.static("/imagens"))
route.use('/user.js', express.static("/"))
route.use('/rotas_user.js', express.static("/"))

 
 route.get("/cad_user",function(req,res){
    res.sendFile(__dirname + "/cad_user.html");
});

 route.get("/user.js",function(req,res){
     res.sendFile(__dirname + "/user.js");
 });

module.exports = route