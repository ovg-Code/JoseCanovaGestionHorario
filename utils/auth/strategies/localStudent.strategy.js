const{Strategy} = require('passport-local')
const boom = require('@hapi/boom')
const bcrypt = require('bcrypt')

const UserServiceStudent = require('../../../services/student.service')
const UserServiceTeacher = require('../../../services/teacher.service')
const UserServiceGuardian = require('../../../services/guardian.service')

const serviceStudent = new UserServiceStudent()
const serviceTeacher = new UserServiceTeacher()
const serviceGuardian = new UserServiceGuardian()

const LocalStrategy = new Strategy({
    usernameField: 'id_card', 
    passwordField: 'password'
},async (id_card,password,done)=>{
    try{
       const student = await serviceStudent.findOneLogin(id_card)
       if(!student){
        done(boom.unauthorized(),false)
       }
       const isMatch = await bcrypt.compare(password,student.passwordstudent)
       if(!isMatch){
        done(boom.unauthorized(),false)
       }
       delete student.dataValues.passwordstudent
       done(null,student)
    }catch(error){
        done(error,false)
    }
    
})
module.exports = LocalStrategy 