const express = require('express');
const app = express();
const db = require('../mongoConect')
const rotas_equips = require('../rotas_equips');
const rotas_user = require('../rotas_user')
const Equips = require("../db_equips")
const Person = require('../db_user')

const cors = require('cors');
const bodyParser = require('body-parser')

require('dotenv').config()

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
      extended: true,
    })
)
app.use(cors());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, X-Content-Type-Options:nosniff, Accept,Authorization");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE, OPTIONS");
    console.log('Cors habilitado')
    next();
});

app.get('/', (req, res) =>{
    try{
        res.json({
            sucess: true,
            message: "Backend Equips_server ok!"
          
        })}catch(error){
        res.status(500).json({error: error})
    }
}
)

//Read
app.get('/equips', rotas_equips.getEquips)

 //Create temps
 app.post('/equips', rotas_equips.postEquip )

 app.get ('/user',rotas_user.getUser)
 app.post('/user',rotas_user.postUser)
 app.put('/user/:id',rotas_user.CadUser)
 app.delete('/user/:id',rotas_user.deleteUser)
 
 

app.use('/', express.static(__dirname + '/'))

app.get("/index.html",function(req,res){
    res.sendFile(__dirname + "/index.html");
});

const PORT = process.env.PORT || 4000;
    app.listen(PORT,()=>{
        console.log("Server Running => Port: " + `${PORT}`);
        })
