const {models} = require('./../libs/sequelize')
const boom = require('@hapi/boom')

class TeacherService{

	async create(){
		const teacher = await models.Teacher.create(data)
		return teacher
	}

	async find(){
		const teacher= await models.Teacher.findAll()
		return teacher
	}

	async findOne(id){
		const teacher = await models.Teacher.findByPk(id);
   		if (!teacher) {
      		throw boom.notFound('Teacher not found');
    	}
    	return teacher;
	}

	async update(id){
		const teacher = await this.findOne(id)
		const rta = await teacher.update(changes)
		return rta
	}

	async delete(){
		const teacher = await this.findOne(id);
    	await teacher.destroy();
    	return { id };
	}
	
}

module.exports= TeacherService
