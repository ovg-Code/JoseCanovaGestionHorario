const {models} = require('./../libs/sequelize')
const boom = require('@hapi/boom')

class ClassroomService{

	async create(data){

		const newClassroom = await models.Classroom.create(data)
		return newClassroom
	}

	async find(){

		const classroom= await models.Classroom.findAll()
		return classroom
		
	}

	async findOne(id){
		
		const classroom = await models.Classroom.findByPk(id)
   		if (!classroom) {
      		throw boom.notFound('Classroom not found')
    	}
    	return classroom;

	}

	async update(id,changes){

		const classroom = await this.findOne(id)
		const rta = await classroom.update(changes)
		return rta
		
	}

	async delete(id){
		
		const classroom = await this.findOne(id);
    	await classroom.destroy();
    	return { id };
	}
}

module.exports= ClassroomService
