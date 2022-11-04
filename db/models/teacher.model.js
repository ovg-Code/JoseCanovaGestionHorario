const {Model,DataTypes,sequelize} = require('sequelize')

const TEACHER_TABLE = 'teacher'

const TeacherSchema = {
    id_card_teacher:{
        allowNull: false,
        unique:true,
        autoIncrement: false,
        primaryKey: true,
        type: DataTypes.STRING
    },
    firstnameteacher:{
        allowNull: false,
        type: DataTypes.STRING
    },
    secondnameteacher:{
        type: DataTypes.STRING
    },
    firstlastnameteacher:{
        allowNull: false,
        type: DataTypes.STRING
    },
    secondlastnameteacher:{
        type: DataTypes.STRING
    },
    phonenumberteacher:{
        allowNull: false,
        type: DataTypes.STRING
    },
    emailteacher:{
        type: DataTypes.STRING
    },
    provinceteacher:{
        allowNull: false,
        type: DataTypes.STRING
    },
    districtteacher:{
        allowNull: false,
        type: DataTypes.STRING
    },
    corregimientoteacher:{
        allowNull: false,
        type: DataTypes.STRING
    },
    phototeacher:{
        type: DataTypes.STRING
    },
    passwordteacher:{
        allowNull: false,
        type: DataTypes.STRING
    }

}

class Teacher extends Model{
    static assocciate(){

    }
    static config(sequelize){
        return{
            sequelize,
            tableName: TEACHER_TABLE,
            modelName: 'Teacher',
            timestamps: false
        }
    }
}

module.exports ={TEACHER_TABLE,TeacherSchema,Teacher}
