const boom = require('@hapi/boom');
const {models} = require('./../libs/sequelize')

class GroupService{

	async create(data){
		const newGroup = await models.Group.create(data)
		return newGroup
	}

	async addLaboratory(data){
		const newLaboratory = await models.GroupLaboratory.create(data)
		return newLaboratory
	}

	async find(){
		const group= await models.Group.findAll()
		return group
	}

	async findOne(id){
		const group = await models.Group.findByPk(id,{
			include:['Laboratory']})
   		if (!group) {
      		throw boom.notFound('Group not found');
    	}
    	return group;
	}

	async update(id,changes){
		const group = await this.findOne(id)
		const rta = await group.update(changes)
		return rta
	}

	async delete(id){
		const group = await this.findOne(id);
    	await group.destroy();
    	return { id };
	}
}

module.exports= GroupService
