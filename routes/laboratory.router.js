const express = require('express')
const LaboratoryService = require('./../services/laboratory.service')
const validatorHandler=require('./../middlewares/validator.handler')
const{createLaboratorySchema,getLaboratorySchema,updateLaboratorySchema}=require('./../schemas/laboratory.schema')

const router = express.Router()
const service = new LaboratoryService ()

//GET

router.get('/',async (req,res,next)=>{
	try{
		const laboratorys = await service.find()
		res.json(laboratorys);

	}catch(error){ next(error) }
})

router.get('/:id',
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