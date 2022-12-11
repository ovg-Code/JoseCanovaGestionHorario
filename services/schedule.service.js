const {models} = require('../libs/sequelize')
const boom = require('@hapi/boom')
const sequelize = require('../libs/sequelize')

class ScheduleService{

	async create(data){
		const newSubject = await models.Teachersubjectgroup.create(data)
		return newSubject
	}

	async find(){
		const schedule= await models.Teachersubjectgroup.findAll()
		return schedule
	}

	async findOneGroup(id){
		const schedule = await sequelize.query('SELECT * FROM f_horario(:id)',
		{replacements: { id },type: sequelize.QueryTypes.SELECT
	});
   		if (!schedule) {
      		throw boom.notFound('schedule not found');
    	}
    	return schedule;
	}

	async update(id,changes){

		const subject = await this.findOne(id)
		const rta = await subject.update(changes)
		return rta
	}

	async delete(id){
		const subject = await this.findOne(id);
    	await subject.destroy();
    	return { id };
	}
}

module.exports= ScheduleService
