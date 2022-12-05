const{Strategy} = require('passport-local')
const boom = require('@hapi/boom')
const bcrypt = require('bcrypt')

const UserService = require('./../../../services/student.service')

const service = new UserService()

const LocalStrategy = new Strategy({
    usernameField: 'id_card_student', 
    passwordField: 'passwordstudent'
},async (id_card_student,passwordstudent,done)=>{
    try{
       const student = await service.findOneLogin(id_card_student)
       if(!student){
        done(boom.unauthorized(),false)
       }
       const isMatch = await bcrypt.compare(passwordstudent,student.passwordstudent)
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