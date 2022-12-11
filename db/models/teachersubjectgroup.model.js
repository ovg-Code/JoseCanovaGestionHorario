const {Model,DataTypes,sequelize} = require('sequelize')

const {TEACHER_TABLE} = require('./teacher.model')
const {GROUP_TABLE} = require('./group.model')
const {SUBJECT_TABLE} = require('./subject.model')


const TEACHERSUBJECTGROUP_TABLE = 'teachersubjectgroup'

const TeacherSubjectGroupSchema = {
    id_schedule:{
        primaryKey: true,
        allowNull: false,
        autoIncrement: false,
        type: DataTypes.STRING,
    },
    fk_id_card_teacher:{
        allowNull: false,
        autoIncrement: false,
        type: DataTypes.STRING,
        references:{model:TEACHER_TABLE,key:'id_card_teacher'}
    },
    fk_id_group:{
        allowNull: false,
        type: DataTypes.STRING,
        references:{model:GROUP_TABLE,key:'id_group'}
    },
    fk_id_subject:{
        allowNull: false,
        type: DataTypes.STRING,
        references:{model:SUBJECT_TABLE,key:'id_subject'}
    },
    hourteachersubjectgroup:{
        allowNull: false,
        type: DataTypes.STRING
    },
    dayteachersubjectgroup:{
        allowNull: false,
        type: DataTypes.STRING
    }


}

class teachersubjectgroup extends Model{
    static assocciate(models){

    }
    static config(sequelize){
        return{
            sequelize,
            tableName: TEACHERSUBJECTGROUP_TABLE,
            modelName: 'Teachersubjectgroup',
            timestamps: false
        }
    }
}

module.exports ={TEACHERSUBJECTGROUP_TABLE,TeacherSubjectGroupSchema,teachersubjectgroup}
