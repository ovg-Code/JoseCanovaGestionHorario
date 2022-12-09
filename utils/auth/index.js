const passport = require('passport')

const LocalStrategyStudent = require('./strategies/localStudent.strategy')
const LocalStrategyTeacher = require('./strategies/localTeacher.strategy')
const LocalStrategyAdmin = require('./strategies/localAdmin.strategy')
const LocalStrategyGuardian = require('./strategies/localGuardian.strategy')
const JwtStrategy = require('./strategies/jwt.strategy')

passport.use('student',LocalStrategyStudent)
passport.use('teacher',LocalStrategyTeacher)
passport.use('guardian',LocalStrategyGuardian)
passport.use('admin',LocalStrategyGuardian)
passport.use(JwtStrategy)  