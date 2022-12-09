const{Strategy} = require('passport-local')
const boom = require('@hapi/boom')
const bcrypt = require('bcrypt')

const UserServiceTeacher = require('../../../services/teacher.service')

const service = new UserServiceTeacher()

const LocalStrategy = new Strategy({
    usernameField: 'id_card', 
    passwordField: 'password'
},async (id_card,password,done)=>{
    try{
       const teacher = await service.findOneLogin(id_card)
       if(!teacher){
        done(boom.unauthorized(),false)
       }
       const isMatch = await bcrypt.compare(password,teacher.passwordteacher)
       if(!isMatch){
        done(boom.unauthorized(),false)
       }
       delete teacher.dataValues.passwordteacher
       done(null,teacher)
    }catch(error){
        done(error,false)
    }
    
})
module.exports = LocalStrategy 