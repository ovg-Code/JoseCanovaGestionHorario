const {models} = require('./../libs/sequelize')
const boom = require('@hapi/boom')

class GuardianService{

	async create(data){

		const newGuardian = await models.Guardian.create(data)
		return newGuardian
	}

	async find(){

		const guardian= await models.Guardian.findAll()
		return guardian
	}

	async findOne(id){

		const guardian = await models.Guardian.findByPk(id);
   		if (!guardian) {
      		throw boom.notFound('Guardian not found');
    	}
    	return guardian;
	}

	async update(id,changes){

		const guardian = await this.findOne(id)
		const rta = await guardian.update(changes)
		return rta
	}

	async delete(id){

		const guardian = await this.findOne(id);
    	await guardian.destroy();
    	return { id };
	}
}

module.exports= GuardianService
