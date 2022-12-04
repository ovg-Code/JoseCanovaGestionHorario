const {Classroom,ClassroomSchema} = require('./classroom.model')
const {Group,GroupSchema} = require('./group.model')
const { GroupLaboratory,GroupLaboratorySchema} = require('./groupLaboratory.model')
const {Guardian,GuardianSchema} = require('./guardian.model')
const {Laboratory,LaboratorySchema } = require('./laboratory.model')
const {Middle, MiddleSchema} = require('./middle.model')
const {Teacher,TeacherSchema} = require('./teacher.model')
const {Premiddle, PremiddleSchema} = require('./premiddle.model')
const {Student,StudentSchema} = require('./student.model')
const {Studentguardian, StudentguardianSchema} =require('./studentguardian.model')
const {subject,SubjectSchema} = require('./subject.model')
const {teachersubjectgroup, TeacherSubjectGroupSchema} = require('./teachersubjectgroup.model')


function setupModels (sequelize){
    Classroom.init(ClassroomSchema,Classroom.config(sequelize))
    Laboratory.init(LaboratorySchema,Laboratory.config(sequelize))
    Group.init(GroupSchema,Group.config(sequelize))
    GroupLaboratory.init(GroupLaboratorySchema,GroupLaboratory.config(sequelize))
    Middle.init(MiddleSchema,Middle.config(sequelize))
    Premiddle.init(PremiddleSchema,Premiddle.config(sequelize))
    Student.init(StudentSchema, Student.config(sequelize))
    Teacher.init(TeacherSchema, Teacher.config(sequelize))
    Guardian.init(GuardianSchema, Guardian.config(sequelize))
    Studentguardian.init(StudentguardianSchema,Studentguardian.config(sequelize))
    subject.init(SubjectSchema,subject.config(sequelize))
    teachersubjectgroup.init(TeacherSubjectGroupSchema,teachersubjectgroup.config(sequelize)) 
      
    Group.assocciate(sequelize.models)
    Laboratory.assocciate(sequelize.models)
    Middle.assocciate(sequelize.models)
    Premiddle.assocciate(sequelize.models)
    Student.assocciate(sequelize.models)
    Guardian.assocciate(sequelize.models)
    Teacher.assocciate(sequelize.models)
    subject.assocciate(sequelize.models)
    
  

}

module.exports = setupModels