const {models} = require('./../libs/sequelize')
const boom = require('@hapi/boom')

class StudentService{

	constructor(){
		
	}
	

	async create(data){

		const newStudent = await models.Student.create(data)
		return newStudent
	}

	async find(){
		const student= await models.Student.findAll()
		return student
	}

	async findOne(id){
		const student = await models.Student.findByPk(id);
   		if (!student) {
      		throw boom.notFound('Student not found');
    	}
    	return student;
	}

	async update(id,changes){
		const student = await this.findOne(id)
		const rta = await student.update(changes)
		return rta
	}

	async delete(id){
		const student = await this.findOne(id);
    	await student.destroy();
    	return { id };
	}
}

module.exports= StudentService
