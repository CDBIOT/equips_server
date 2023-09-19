
const express = require('express');
const Equips = require('./db_equips')

//Read Equips
const getEquips =(async (req, res) =>{

    try{
        const equip = await Equips.find()
        return res.status(422).json({equip})
    }catch(error){
        res.status(500).json({error: error})
    }  
})

 //Create
 const postEquip = (async (req, res) =>{
    const {patrimonio, equipamento, marca, modelo, serial } = req.body
    // const temps = req.params
 const equips = {patrimonio, equipamento, marca, modelo, serial }
 const create_equip = new Equips(equips);
 //temps.save()
     try{
         await Equips.create(create_equip)
         //temps.save()
         console.log(equips)
         res.status(201).json({message: "Equipamento cadastrado com sucesso"})
         }catch(error){
         res.status(500).json({error: error})
     }  
})

 //Delete equip
 const deleteEquip = (async (req, res) => {
    const id = req.params.id
    const equip = await Equips.findById(id)
    if(!equip){
    res.status(422).json({message:  'Equipament not found'});

    return
    }
    try{
        await Equips.deleteOne(equip);
        res.status(200).json({message: 'Equip sucess delete'});
    
    }catch(error){
    res.status(500).json({error: error})
    console.log(id);
}  

});


//Update equip
const putEquip = (async (req, res) =>{
    const id = req.params.id
    const {patrimonio, equipamento, marca, modelo, serial} = req.body
    const equip = {patrimonio, equipamento, marca, modelo, serial}
    try{
     const updateEquip = await Equips.updateOne({id: _id},equip);
     res.status(200).json(equip);
    }catch(error){
    res.status(500).json({error: error})
}  
});


module.exports = {
    getEquips,
    postEquip,
    deleteEquip,
    putEquip
}