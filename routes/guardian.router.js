const express = require('express')
const passport = require('passport');

const validatorHandler=require('./../middlewares/validator.handler')
const { checkRoles } = require('./../middlewares/auth.handle')
const GuardianService = require('./../services/guardian.service')
const{createGuardianSchema,getGuardianSchema,updateGuardianSchema}=require('./../schemas/guardian.schema')

const router = express.Router()
const service = new GuardianService()

//GET

router.get('/',
  passport.authenticate('jwt', {session: false}),
  checkRoles('admin','teacher'),
async (req,res,next)=>{
	try{

		const guardians = await service.find()
		res.json(guardians);

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
			const guardian = await service.findOne(id)
			res.json(guardian);

		}catch(error){

			next(error)
		}
})

// POST

router.post('/', 
  passport.authenticate('jwt', {session: false}),
  checkRoles('admin'),
  validatorHandler(createGuardianSchema, 'body'),
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
  passport.authenticate('jwt', {session: false}),
  checkRoles('admin'),
  validatorHandler(updateGuardianSchema, 'body'),
  async (req,res,next )=>{
	try{
		const{id} = req.params
		const body=req.body
		const guardian = await service.update(id, body)
		res.json(guardian)
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