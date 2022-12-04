const{Strategy} = require('passport-local')
const boom = require('@hapi/boom')
const bcrypt = require('bcrypt')

const UserService = require('./../../../services/student.service')

const service = new UserService()

const LocalStrategy = new Strategy({usernameField: 'id_card_student', passwordField: 'passwordstudent'},async (idCard,password,done)=>{
    try{
       const student = await service.findOneLogin(idCard)
       if(!student){
        done(boom.unauthorized(),false)
       }
       const isMatch = await bcrypt.compare(password,student.passwordStudent)
       if(!isMatch){
        done(boom.unauthorized(),false)
       }
       done(null,student)
    }catch(error){
        done(error,false)
    }
    
})
module.exports = LocalStrategy 