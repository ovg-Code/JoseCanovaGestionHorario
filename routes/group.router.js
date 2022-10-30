const express = require('express')
const GroupService =require('./../services/group.service')
const router = express.Router()
const service = new GroupService()

//GET

router.get('/',(req,res)=>{
	const group = service.find()
	res.send(group) 
})

router.get('/:id',(req,res)=>{
	const{id}=req.params
	const group = service.findOne(id)
	res.send(group) 
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