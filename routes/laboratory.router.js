const express = require('express')
const LaboratoryService = require('./../services/laboratory.service')
const router = express.Router()
const service = new LaboratoryService ()

//GET

router.get('/',(req,res)=>{
	const laboratory = service.find()
	res.send(laboratory) 
})

router.get('/:id',(req,res)=>{
	const{id}=req.params
	const laboratory = service.findOne(id)
	res.send(laboratory) 
})

// POST

router.post('/',(req,res)=>{
	const body = req.body

	res.json({
		message:'created'
	}) 
})

//PATCH

router.patch('/:id',(req,res)=>{
	const{id} = req.params
	const body=req.body

	res.json({
		message:'Update',
		data:body,
		id
	})

})

//DELETE

router.delete('/:id',(req,res)=>
	{const{id}=req.params
		res.json({message:'deleted',id,})
	})

module.exports = router