const express = require('express')

const StudentService =require('./../services/student.service')
const validatorHandler=require('./../middlewares/validator.handler')
const{createStudentSchema,updateStudentSchema,getStudentSchema}=require('./../schemas/student.schema')

const router = express.Router()
const service = new StudentService()

//GET

router.get('/',async (req,res),next=>{
	try{

		const students = service.find()
		res.send(students) 

	}catch(error){

		next(error)
	}
	
})

router.get('/:id',
  validatorHandler(getStudentSchema, 'params'),
  async (req,res,next)=>{
	try{

		const{id}=req.params
		const students = service.findOne(id)
		res.send(students) 

	}catch(error){

		next(error)

	}
	
})

// POST

router.post('/',
  validatorHandler(createStudentSchema, 'body'),
  async (req,res,next)=>{
	try{

		const body = req.body

		res.json({
		message:'created'

	}) 
	}catch(error){
		next(error)
	}
	
})

//PATCH

router.patch('/:id',
  validatorHandler(getStudentSchema, 'params'),
  validatorHandler(updateStudentSchema, 'body'),
  async (req,res)=>{
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
