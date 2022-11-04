const {Model,DataTypes,sequelize} = require('sequelize')

const SUBJECT_TABLE = 'subject'

const SubjectSchema = {
    id_subject:{
        allowNull: false,
        unique:true,
        autoIncrement: false,
        primaryKey: true,
        type: DataTypes.STRING
    },
    namesubject:{
        allowNull: false,
        type: DataTypes.STRING
    }

}

class subject extends Model{
    static assocciate(){

    }
    static config(sequelize){
        return{
            sequelize,
            tableName: SUBJECT_TABLE,
            modelName: 'Subject',
            timestamps: false
        }
    }
}

module.exports ={SUBJECT_TABLE,SubjectSchema,subject}
