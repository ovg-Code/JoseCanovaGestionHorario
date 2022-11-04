const {Model,DataTypes,sequelize} = require('sequelize')

const { STUDENT_TABLE} = require('./student.model')
const { GUARDIAN_TABLE} = require('./guardian.model')

const STUDENTGUARDIAN_TABLE = 'studentguardian'

const StudentguardianSchema = {
    id_card_guardian:{
        allowNull: false,
        unique:true,
        autoIncrement: false,
        primaryKey: true,
        type: DataTypes.STRING,
        references:{model:STUDENT_TABLE,key:'id_card_student'}
    },
    id_card_student:{
        allowNull: false,
        type: DataTypes.STRING,
        references:{model:GUARDIAN_TABLE,key:'id_card_guardian'}
    }
}

class Studentguardian extends Model{
    static assocciate(models){
        this.belongsTo(models.Guardian, {as: 'student_fK'})
        this.belongsTo(models.Student, {as: 'guardian_fK'})
    }
    static config(sequelize){
        return{
            sequelize,
            tableName: STUDENTGUARDIAN_TABLE,
            modelName: 'Studentguardian',
            timestamps: false
        }
    }
}

module.exports ={STUDENTGUARDIAN_TABLE,StudentguardianSchema,Studentguardian}
