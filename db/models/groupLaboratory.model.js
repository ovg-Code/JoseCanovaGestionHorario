const {Model,DataTypes,sequelize} = require('sequelize')
const { GROUP_TABLE} = require('./group.model')
const {LABORATORY_TABLE} = require('./laboratory.model')

const GROUPLABORATORY_TABLE = 'grouplaboratory'

const GroupLaboratorySchema = {
    fk_id_laboratory:{
        allowNull: false,
        unique:true,
        autoIncrement: false,
        primaryKey: true,
        type: DataTypes.STRING,
        references:{model:LABORATORY_TABLE,key:'id_laboratory'}
    },
    fk_id_group:{
        allowNull: false,
        primaryKey: true,
        type: DataTypes.STRING,
        references:{model:GROUP_TABLE,key:'id_group'}
    }

}

class GroupLaboratory extends Model{
    static assocciate(models){

        this.belongsTo(models.Laboratory, {as: 'laboratory_fk'})
        this.belongsTo(models.Group, {as: 'group_fk'}) 
    }
    static config(sequelize){
        return{
            sequelize,
            tableName: GROUPLABORATORY_TABLE,
            modelName: 'GroupLaboratory',
            timestamps: false
        }
    }
}

module.exports ={GROUPLABORATORY_TABLE,GroupLaboratorySchema,GroupLaboratory}
