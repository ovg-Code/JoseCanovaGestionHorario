const express = require('express')
const passport = require('passport');

const GroupService =require('./../services/group.service')
const { checkRoles } = require('./../middlewares/auth.handle')
const validatorHandler=require('./../middlewares/validator.handler')
const{createGroupSchema,updateGroupSchema,getGroupSchema, addLaboratory,addMiddle,addPremiddle}=require('./../schemas/group.schema')

const router = express.Router()
const service = new GroupService()

//GET

router.get('/',
	passport.authenticate('jwt', {session: false}),
	checkRoles('admin','teacher'),
	async (req,res,next)=>{
	try{

		const group = await service.find()
		res.json(group);

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
			const group = await service.findOne(id)
			res.json(group) 
	
		}catch(error){
	
			next(error)
	
		}
})

// POST

router.post('/',
  passport.authenticate('jwt', {session: false}),
  checkRoles('admin'),
  validatorHandler(createGroupSchema, 'body'),
  async (req,res,next)=>{
	try{
		const body = req.body
		const newGroup = await service.create(body)
		res.status(201).json(newGroup)
		
	}catch(error){
		next(error)
	}
	
})

router.post('/addLaboratory',
  passport.authenticate('jwt', {session: false}),
  checkRoles('admin'),
  validatorHandler(addLaboratory, 'body'),
  async (req,res,next)=>{
	try{
		const body = req.body
		const newLaboratory = await service.addLaboratory(body)
		res.status(201).json(newLaboratory)
		
	}catch(error){
		next(error)
	}
})

router.post('/addMiddle',
  passport.authenticate('jwt', {session: false}),
  checkRoles('admin'),
  validatorHandler(addMiddle, 'body'),
  async (req,res,next)=>{
	try{
		const body = req.body
		const middle = await service.addMiddle(body)
		res.status(201).json(middle)
		
	}catch(error){
		next(error)
	}
	
})

router.post('/addPremiddle',
  passport.authenticate('jwt', {session: false}),
  checkRoles('admin'),
  validatorHandler(addPremiddle, 'body'),
  async (req,res,next)=>{
	try{
		const body = req.body
		const newGroup = await service.addPremiddle(body)
		res.status(201).json(newGroup)
		
	}catch(error){
		next(error)
	}
	
})

//PATCH

router.patch('/:id',
  passport.authenticate('jwt', {session: false}),
  checkRoles('admin'),
  validatorHandler(updateGroupSchema, 'body'),
  async (req,res,next )=>{
	try{
		const{id} = req.params
		const body=req.body
		const group = await service.update(id, body)
		res.json(group)
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