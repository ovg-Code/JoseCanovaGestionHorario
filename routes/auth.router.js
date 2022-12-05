const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken')
const {config} = require('./../config/config')

const router = express.Router()

router.post('/login',
  passport.authenticate('local', {session: false}),
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
);

module.exports = router;