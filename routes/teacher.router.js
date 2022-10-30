const express = require('express')
const TeacherService = require('./../services/teacher.service')
const router = express.Router()
const service = new TeacherService

//GET

router.get('/',(req,res)=>{
	const teacher = service.find()
	res.send(teacher) 
})

router.get('/:id',(req,res)=>{
	const{id}=req.params
	const teacher = service.findOne(id)
	res.send(teacher) 
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