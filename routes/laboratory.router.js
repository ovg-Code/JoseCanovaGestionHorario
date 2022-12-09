const express = require('express')
const passport = require('passport')

const LaboratoryService = require('./../services/laboratory.service')
const validatorHandler=require('./../middlewares/validator.handler')
const { checkRoles } = require('./../middlewares/auth.handle')
const{createLaboratorySchema,getLaboratorySchema,updateLaboratorySchema}=require('./../schemas/laboratory.schema')

const router = express.Router()
const service = new LaboratoryService ()

//GET

router.get('/',
  passport.authenticate('jwt', {session: false}),
  checkRoles('admin','teacher'),
  async (req,res,next)=>{
	
	try{
		const laboratorys = await service.find()
		res.json(laboratorys);

	}catch(error){ next(error) }
})

router.get('/:id',
  passport.authenticate('jwt', {session: false}),
  checkRoles('admin','teacher'),
  async (req,res,next)=>{
	try{
		const { id } = req.params
		const laboratory = await service.findOne(id)
		res.json(laboratory) 

	}catch(error){

		next(error)

	}
})

// POST

router.post('/',
passport.authenticate('jwt', {session: false}),
checkRoles('admin'),
  validatorHandler(createLaboratorySchema, 'body'),
  async (req,res,next)=>{
	try{
		const body = req.body
		const newLaboratory = await service.create(body)
		res.status(201).json(newLaboratory)
		
	}catch(error){
		next(error)
	}
})

//PATCH

router.patch('/:id',
  passport.authenticate('jwt', {session: false}),
  checkRoles('admin'),
  validatorHandler(updateLaboratorySchema, 'body'),
  async (req,res,next )=>{
	try{
		const{id} = req.params
		const body=req.body
		const laboratory = await service.update(id, body)
		res.json(laboratory)
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