const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken')
const {config} = require('./../config/config')

const router = express.Router()

router.post('/loginStudent',
  passport.authenticate('student', {session: false}),
  async (req, res, next) => {
    try {
    const student = req.user
    const payload ={
        sub: student.idCard,
        role: 'student'
    }
    const token = jwt.sign(payload,config.jwtSecret)
    res.json({
        student,
        token
    })
    } catch (error) {
      next(error);
    }
  }
)

router.post('/loginTeacher',
  passport.authenticate('teacher', {session: false}),
  async (req, res, next) => {
    try {
    const teacher = req.user
    const payload ={
        sub: teacher.idCard,
        role: 'teacher'
    }
    const token = jwt.sign(payload,config.jwtSecret)
    res.json({
      teacher,
        token
    })
    } catch (error) {
      next(error);
    }
  }
)

router.post('/loginGuardian',
  passport.authenticate('guardian', {session: false}),
  async (req, res, next) => {
    try {
    const guardian = req.user
    const payload ={
        sub: guardian.idCard,
        role: 'guardian'
    }
    const token = jwt.sign(payload,config.jwtSecret)
    res.json({
      guardian,
        token
    })
    } catch (error) {
      next(error);
    }
  }
);

router.post('/loginAdmin',
  passport.authenticate('admin', {session: false}),
  async (req, res, next) => {
    try {
    const admin = req.user
    const payload ={
        sub: admin.idCard,
        role: 'admin'
    }
    const token = jwt.sign(payload,config.jwtSecret)
    res.json({
      admin,
        token
    })
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;