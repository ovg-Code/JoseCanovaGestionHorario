const express = require('express')
const GuardianService = require('./../services/guardian.service')
const router = express.Router()
const service = new GuardianService()

//GET

router.get('/',(req,res)=>{
	const guardian = service.find()
	res.send(guardian) 
})

router.get('/:id',(req,res)=>{
	const{id}=req.params
	const guardian = service.findOne(id)
	res.send(guardian) 
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