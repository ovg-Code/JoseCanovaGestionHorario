const express = require('express')
const ClassroomService =require('./../services/classroom.service')
const router = express.Router()
const service = new ClassroomService()
//GET

router.get('/',(req,res)=>{
	const classroom = service.find()
	res.send(classroom ) 
})

router.get('/:id',(req,res)=>{
	const classroom = service.findOne(id)
	res.send(classroom ) 
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