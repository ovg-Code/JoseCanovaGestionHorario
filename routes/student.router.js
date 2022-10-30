const express = require('express')
const StudentService =require('./../services/student.service')
const router = express.Router()
const service = new StudentService()

//GET

router.get('/',(req,res)=>{
	const students = service.find()
	res.send(students) 
})

router.get('/:id',(req,res)=>{
	const{id}=req.params
	const students = service.findOne(id)
	res.send(students) 
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
