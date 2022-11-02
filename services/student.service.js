const sequelize = require('../libs/sequelize');
const pool = require('../libs/sequelize');

class StudentService{

	constructor(){
		
	}
	

	async create(){

	}

	async find(){
		const query = 'SELECT * FROM STUDENT';
    	const [data] = await sequelize.query(query);
    	return data;
	}

	async findOne(id){
		return('encontrado uno')
	}

	async update(id){
		
	}

	async delete(){
		return('Eliminado')
	}
}

module.exports= StudentService
