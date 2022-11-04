const { Model,DataTypes,sequelize} = require('sequelize')
const { GROUP_TABLE} = require('./group.model')
const MIDDLE_TABLE = 'middle'

const MiddleSchema = {
    schoolshiftmiddle:{
        allowNull: false,
        unique:true,
        autoIncrement: false,
        type: DataTypes.STRING
    },
    baccalaureatemiddle:{
        allowNull: false,
        primaryKey: true,
        type: DataTypes.STRING
    },
    fk_id_group:{
        allowNull: false,
        type: DataTypes.STRING,
        primaryKey: true,
        references:{model:GROUP_TABLE,key:'id_group'}
    }

}

class Middle extends Model{
    static assocciate(models){
        this.belongsTo(models.Group, {as: 'group_fk'})
    }
    static config(sequelize){
        return{
            sequelize,
            tableName: MIDDLE_TABLE,
            modelName: 'Middle',
            timestamps: false
        }
    }
}

module.exports ={MIDDLE_TABLE,MiddleSchema,Middle}
