const {Model,DataTypes,sequelize} = require('sequelize')

const {TEACHER_TABLE} = require('./teacher.model')
const {GROUP_TABLE} = require('./group.model')
const {SUBJECT_TABLE} = require('./subject.model')


const TEACHERSUBJECTGROUP_TABLE = 'teachersubjectgroup'

const TeacherSubjectGroupSchema = {
    fk_id_card_teacher:{
        allowNull: false,
        unique:true,
        autoIncrement: false,
        primaryKey: true,
        type: DataTypes.STRING,
        references:{model:TEACHER_TABLE,key:'id_card_teacher'}
    },
    fk_id_group:{
        allowNull: false,
        type: DataTypes.STRING,
        primaryKey: true,
        references:{model:GROUP_TABLE,key:'id_group'}
    },
    fk_id_subject:{
        allowNull: false,
        type: DataTypes.STRING,
        primaryKey: true,
        references:{model:SUBJECT_TABLE,key:'id_subject'}
    },
    hourteachersubjectgroup:{
        allowNull: false,
        type: DataTypes.TIME
    },
    dayteachersubjectgroup:{
        allowNull: false,
        type: DataTypes.DATE
    }


}

class teachersubjectgroup extends Model{
    static assocciate(models){
        this.belongsTo(models.Teacher, {as: 'teacher_fk'})
        this.belongsTo(models.Group, {as: 'group_fk'})
        this.belongsTo(models.Subject, {as: 'subject_fk'})
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
