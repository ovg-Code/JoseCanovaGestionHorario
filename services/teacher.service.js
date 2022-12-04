const {models} = require('./../libs/sequelize')
const boom = require('@hapi/boom')
const bcrypt = require('bcrypt')

class TeacherService{

	async create(data){
		const hash = await bcrypt.hash(data.passwordteacher,10)
		const newTeacher = await models.Teacher.create({
			...data,
			passwordteacher:hash
		})
		delete newTeacher.dataValues.passwordteacher
		return newTeacher
	}
	async addSubject(data){
		const subject = await models.Teachersubjectgroup.create(data)
		return subject
	}

	async find(){
		const teacher= await models.Teacher.findAll()
		return teacher
	}

	async findOne(id){
		const teacher = await models.Teacher.findByPk(id,{
			include:[{
				association:'subject',
				through: {attributes: []}
				
			}]
		});
   		if (!teacher) {
      		throw boom.notFound('Teacher not found');
    	}
    	return teacher;
	}

	async update(id,changes){
		const teacher = await this.findOne(id)
		const rta = await teacher.update(changes)
		return rta
	}

	async delete(id){
		const teacher = await this.findOne(id);
    	await teacher.destroy();
    	return { id };
	}
	
}

module.exports= TeacherService
