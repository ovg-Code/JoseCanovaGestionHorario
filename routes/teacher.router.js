const express = require('express')
const TeacherService = require('./../services/teacher.service')
const validatorHandler=require('./../middlewares/validator.handler')
const{createTeacherSchema,updateTeacherSchema,getTeacherSchema}=require('./../schemas/teacher.schema')

const router = express.Router()
const service = new TeacherService

//GET

router.get('/',async (req,res,next)=>{
	try{

		const teachers = await service.find()
		res.json(teachers);

	}catch(error){

		next(error)
	}
})

router.get('/:id',async (req,res,next)=>{
	try{
		const { id } = req.params
		const teacher = await service.findOne(id)
		res.json(teacher) 

	}catch(error){

		next(error)

	}
})

// POST

router.post('/',validatorHandler(createTeacherSchema, 'body'),
  async (req,res,next)=>{
	try{
		const body = req.body
		const newTeacher = await service.create(body)
		res.status(201).json(newTeacher)
		
	}catch(error){
		next(error)
	}
})

//PATCH

router.patch('/:id',validatorHandler(updateTeacherSchema, 'body'),
async (req,res,next )=>{
  try{
	  const{id} = req.params
	  const body=req.body
	  const teacher = await service.update(id, body)
	  res.json(teacher)
  }catch(error){
	  next(error)
  }

})

//DELETE

router.delete('/:id',async (req,res,next)=>{
	try{
		const {id} = req.params
		await service.delete(id)
		res.status(201).json({id})
	}catch(error){
		next(error)
	}
})

module.exports = router