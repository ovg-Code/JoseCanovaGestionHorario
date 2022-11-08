const {Model,DataTypes,sequelize} = require('sequelize')
const { GROUP_TABLE} = require('./group.model')
const PREMIDDLE_TABLE = 'premiddle'

const PremiddleSchema = {
    schoolshiftpremiddle:{
        allowNull: false,
        unique:true,
        autoIncrement: false,
        primaryKey: true,
        type: DataTypes.STRING
    },
    fk_id_group:{
        allowNull: false,
        primaryKey: true,
        type: DataTypes.STRING,
        references:{model:GROUP_TABLE,key:'id_group'}
    }

}

class Premiddle extends Model{
    static assocciate(models){
        
    }
    static config(sequelize){
        return{
            sequelize,
            tableName: PREMIDDLE_TABLE,
            modelName: 'Premiddle',
            timestamps: false
        }
    }
}

module.exports ={PREMIDDLE_TABLE,PremiddleSchema,Premiddle}
