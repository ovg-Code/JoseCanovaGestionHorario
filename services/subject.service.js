const {models} = require('./../libs/sequelize')
const boom = require('@hapi/boom')

class SubjectService{

	async create(data){
		const newSubject = await models.Subject.create(data)
		return newSubject
	}

	async find(){
		const subject= await models.Subject.findAll()
		return subject
	}

	async findOne(id){
		const subject = await models.Subject.findByPk(id,{
			include:[{
				association:'group',
				attributes: ['id_group'],
				through: {attributes: []},
			},{
				association:'teacher',
				attributes: ['firstnameteacher','firstlastnameteacher'],
				through: {attributes: []},
			}],
			
			
		});
   		if (!subject) {
      		throw boom.notFound('Subject not found');
    	}
    	return subject;
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

module.exports= SubjectService
