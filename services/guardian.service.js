const {models} = require('./../libs/sequelize')
const boom = require('@hapi/boom')
const bcrypt = require('bcrypt')

class GuardianService{

	async create(data){

		const hash = await bcrypt.hash(data.passwordguardian,10)
		const newGuardian = await models.Guardian.create({
			...data,
			passwordguardian: hash
		})
		delete newGuardian.dataValues.passwordguardian
		return newGuardian
	}

	async find(){

		const guardian= await models.Guardian.findAll()
		delete guardian.dataValues.passwordguardian
		return guardian
	}

	async findOne(id){

		const guardian = await models.Guardian.findByPk(id);
		delete guardian.dataValues.passwordguardian
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
