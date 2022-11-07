const {Model,DataTypes,sequelize} = require('sequelize')

const LABORATORY_TABLE = 'laboratory'

const LaboratorySchema = {
    id_laboratory:{
        allowNull: false,
        unique:true,
        autoIncrement: false,
        primaryKey: true,
        type: DataTypes.STRING
    },
    pavilionlaboratory:{
        allowNull: false,
        type: DataTypes.STRING
    },
    typelaboratory:{
        allowNull: false,
        type: DataTypes.STRING
    }

}

class Laboratory extends Model{
    static assocciate(models){
        this.hasMany(models.GroupLaboratory,{
            as:'group',
            foreignKey: 'fk_id_laboratory',
        })
    }
    static config(sequelize){
        return{
            sequelize,
            tableName: LABORATORY_TABLE,
            modelName: 'Laboratory',
            timestamps: false
        }
    }
}

module.exports ={LABORATORY_TABLE,LaboratorySchema,Laboratory}
