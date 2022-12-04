const express = require('express')

const StudentService =require('./../services/student.service')
const validatorHandler=require('./../middlewares/validator.handler')
const{createStudentSchema,updateStudentSchema,getStudentSchema, addGuardianSchema}=require('./../schemas/student.schema')

const router = express.Router()
const service = new StudentService()

//GET

router.get('/',async (req,res,next)=>{
	try{

		const students = await service.find()
		res.json(students);

	}catch(error){

		next(error)
	}
})

router.get('/:id',
  async (req,res,next)=>{
	try{
		const { id } = req.params
		const student = await service.findOne(id)
		res.json(student) 

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
		const newStudent = await service.create(body)
		res.status(201).json(newStudent)
		
	}catch(error){
		next(error)
	}
})

router.post('/addguardian',
  validatorHandler(addGuardianSchema, 'body'),
  async (req,res,next)=>{
	try{
		const body = req.body
		const newGuardian = await service.addGuardian(body)
		res.status(201).json(newGuardian)
		
	}catch(error){
		next(error)
	}
})

//PATCH

router.patch('/:id',
  validatorHandler(updateStudentSchema, 'body'),
  async (req,res,next )=>{
	try{
		const{id} = req.params
		const body=req.body
		const student = await service.update(id, body)
		res.json(student)
	}catch(error){
		next(error)
	}
})

//DELETE

router.delete('/:id',
async (req,res,next)=>{
	try{
		const {id} = req.params
		await service.delete(id)
		res.status(201).json({id})
	}catch(error){
		next(error)
	}
})
	



module.exports = router
