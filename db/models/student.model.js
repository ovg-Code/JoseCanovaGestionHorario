
const {Model,DataTypes,Sequelize} = require('sequelize')

const { GROUP_TABLE} = require('./group.model')

const STUDENT_TABLE = 'student'

const StudentSchema = {
    id_card_student:{
        allowNull: false,
        unique:true,
        autoIncrement: false,
        primaryKey: true,
        type: DataTypes.STRING
    },
    firstnamestudent:{
        allowNull: false,
        type: DataTypes.STRING
    },
    secondnamestudent:{
        type: DataTypes.STRING
    },
    firstlastnamestudent:{
        allowNull: false,
        type: DataTypes.STRING
    },
    secondlastnamestudent:{
        type: DataTypes.STRING
    },
    phonenumberstudent:{
        allowNull: false,
        type: DataTypes.STRING
    },
    emailstudent:{
        type: DataTypes.STRING
    },
    provincestudent:{
        allowNull: false,
        type: DataTypes.STRING
    },
    districtstudent:{
        allowNull: false,
        type: DataTypes.STRING
    },
    corregimientostudent:{
        allowNull: false,
        type: DataTypes.STRING
    },
    photostudent:{
        type: DataTypes.STRING
    },
    passwordstudent:{
        allowNull: false,
        type: DataTypes.STRING
    },
    fk_id_group:{
        allowNull: false,
        type: DataTypes.STRING,
        references:{model:GROUP_TABLE,key:'id_group'}
    }
}

class Student extends Model{
    static assocciate(models){
        
    }
    static config(sequelize){
        return{
            sequelize,
            tableName: STUDENT_TABLE,
            modelName: 'Student', 
            timestamps: false
        }
    }
}
module.exports ={STUDENT_TABLE,StudentSchema,Student}
