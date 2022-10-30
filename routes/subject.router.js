const express = require('express')
const SubjectService = require('./../services/subject.service')
const router = express.Router()
const service = new SubjectService

//GET

router.get('/',(req,res)=>{
	const subject = service.find()
	res.send(subject) 
})

router.get('/:id',(req,res)=>{
	const{id}=req.params
	const subject = service.findOne(id)
	res.send(subject) 
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