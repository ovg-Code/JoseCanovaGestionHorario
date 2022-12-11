const express = require('express')


const studentRouter = require('./student.router')
const teacherRouter =require('./teacher.router')
const guardianRouter =require('./guardian.router')
const classroomRouter =require('./classroom.router')
const groupRouter =require('./group.router')
const laboratoryRouter =require('./laboratory.router')
const subjectRouter =require('./subject.router')
const authRouter = require('./auth.router');
const schedule = require('./schedule.router');
function routerApi(app){
	const router = express.Router()
	app.use('/api/v1',router)
	router.use('/Student',studentRouter)
	router.use('/teacher',teacherRouter)
	router.use('/guardian',guardianRouter)
	router.use('/classroom',classroomRouter)
	router.use('/group',groupRouter)
	router.use('/laboratory',laboratoryRouter)
	router.use('/subject',subjectRouter)
	router.use('/auth', authRouter);
	router.use('/schedule', schedule);
}	

module.exports = routerApi
 