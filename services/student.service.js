const pool = require('../libs/postgress.pool');

class StudentService{

	constructor(){
		this.pool = pool;
    	this.pool.on('error', (err) => console.error(err));
	}
	

	async create(){

	}

	async find(){
		const query = 'SELECT * FROM STUDENT';
    	const rta = await this.pool.query(query);
    	return rta.rows;
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
