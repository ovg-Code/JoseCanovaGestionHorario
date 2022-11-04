const {Model,DataTypes,sequelize} = require('sequelize')

const CLASSROOM_TABLE = 'classroom'

const ClassroomSchema = {
    id_classroom:{
        allowNull: false,
        unique:true,
        autoIncrement: false,
        primaryKey: true,
        type: DataTypes.STRING
    },
    pavilionclassroom:{
        allowNull: false,
        type: DataTypes.STRING
    },
    capacityclassroom:{
        allowNull: false,
        type: DataTypes.INTEGER
    },
    

}

class Classroom extends Model{
    static assocciate(models){
        this.hasMany(models.Group, {
            as: 'group',
            foreignKey: 'fk_id_classroom'
          });
    }
    static config(sequelize){
        return{
            sequelize,
            tableName: CLASSROOM_TABLE,
            modelName: 'Classroom',
            timestamps: false
        }
    }
}

module.exports ={CLASSROOM_TABLE,ClassroomSchema,Classroom}
