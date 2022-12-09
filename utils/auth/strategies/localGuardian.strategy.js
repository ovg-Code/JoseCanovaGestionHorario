const{Strategy} = require('passport-local')
const boom = require('@hapi/boom')
const bcrypt = require('bcrypt')

const UserServiceGuardian = require('../../../services/guardian.service')

const service = new UserServiceGuardian()

const LocalStrategy = new Strategy({
    usernameField: 'id_card', 
    passwordField: 'password'
},async (id_card,password,done)=>{
    try{
       const guardian = await service.findOneLogin(id_card)
       if(!guardian){
        done(boom.unauthorized(),false)
       }
       const isMatch = await bcrypt.compare(password,guardian.passwordguardian)
       if(!isMatch){
        done(boom.unauthorized(),false)
       }
       delete guardian.dataValues.passwordguardian
       done(null,guardian)
    }catch(error){
        done(error,false)
    }
    
})
module.exports = LocalStrategy 