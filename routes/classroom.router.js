const express = require('express')
const ClassroomService =require('./../services/classroom.service')
const validatorHandler=require('./../middlewares/validator.handler')
const {createClassroomSchema,getClassroomSchema,updateClassroomSchema} = require('./../schemas/classroom.schema')
const router = express.Router()
const service = new ClassroomService()
//GET

router.get('/',async (req,res,next)=>{
	try{

		const classroom = await service.find()
		res.json(classroom);

	}catch(error){

		next(error)
	}
})

router.get('/:id',
  async (req,res,next)=>{
	try{
		const { id } = req.params
		const classroom = await service.findOne(id)
		res.json(classroom) 

	}catch(error){

		next(error)

	}
})

// POST

router.post('/',
  validatorHandler(createClassroomSchema, 'body'),
	async (req,res,next)=>{
		try{
			const body = req.body
			const newStudent = await service.create(body)
			res.status(201).json(newStudent)
			
		}catch(error){
			next(error)
		}
})

//PATCH

router.patch('/:id',
  validatorHandler(updateClassroomSchema, 'body'),
	async (req,res,next )=>{
		try{
			const{id} = req.params
			const body=req.body
			const classroom = await service.update(id, body)
			res.json(classroom)
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