const express = require('express')
const passport = require('passport');
const StudentService =require('./../services/student.service')
const validatorHandler=require('./../middlewares/validator.handler')
const { checkRoles } = require('./../middlewares/auth.handle')
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
  passport.authenticate('jwt', {session: false}),
  checkRoles('admin','teacher'),
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
  passport.authenticate('jwt', {session: false}),
  checkRoles('admin'),
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
  passport.authenticate('jwt', {session: false}),
  checkRoles('admin'),
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
  passport.authenticate('jwt', {session: false}),
  checkRoles('admin','teacher'),
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
  passport.authenticate('jwt', {session: false}),
  checkRoles('admin'),
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
