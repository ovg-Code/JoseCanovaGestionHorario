const {models} = require('./../libs/sequelize')
const boom = require('@hapi/boom')

class LaboratoryService{

	async create(data){
		const newLaboratory = await models.Laboratory.create(data)
		return newLaboratory
	}

	async find(){
		const laboratory= await models.Laboratory.findAll()
		return laboratory
	}

	async findOne(id){
	
		const laboratory = await models.Laboratory.findByPk(id);
   		if (!laboratory) {
      		throw boom.notFound('Laboratory not found');
    	}
    	return laboratory;
	}

	async update(id,changes){
		const laboratory = await this.findOne(id)
		const rta = await laboratory.update(changes)
		return rta
		
	}

	async delete(id){
		const laboratory = await this.findOne(id);
    	await laboratory.destroy();
    	return { id };
	}
}

module.exports= LaboratoryService
