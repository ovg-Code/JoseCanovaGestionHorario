const Joi=require('joi')

const id_card_teacher=Joi.string().min(10).max(10)
const firstnameteacher=Joi.string().min(2).max(40)
const secondnameteacher=Joi.string().min(2).max(40)
const firstlastnameteacher=Joi.string().min(2).max(40)
const secondlastnameteacher=Joi.string().min(2).max(40)
const phonenumberteacher=Joi.string().min(6).max(10)
const emailteacher=Joi.string().min(10).max(100)
const provinceteacher=Joi.string().min(10).max(60)
const districtteacher=Joi.string().min(10).max(60)
const corregimientoteacher=Joi.string().min(10).max(60)
const phototeacher=Joi.string().min(10).max(100)
const passwordteacher=Joi.string().min(6).max(10)

const createTeacherSchema=Joi.object({
    id_card_teacher: id_card_teacher.required(),
    firstnameteacher: firstnameteacher.required(),
    secondnameteacher:secondnameteacher,
    firstlastnameteacher: firstlastnameteacher.required(),
    secondlastnameteacher: secondlastnameteacher,
    phonenumberteacher: phonenumberteacher.required(),
    emailteacher: emaiteachert,
    provinceteacher: provinceteacher.required(),
    districtteacher: districtteacher.required(),
    corregimientoteacher: corregimientoteacher.required(),
    phototeacher: phototeacher,
    passwordteacher:passwordteacher.required(),

})
const updateTeacherSchema=Joi.object({
    id_card_teacher: id_card_teacher,
    firstnameteacher: firstnameteacher,
    secondnameteacher:secondnameteacher,
    firstlastnameteacher: firstlastnameteacher,
    secondlastnameteacher: secondlastnameteacher,
    phonenumberteacher: phonenumberteacher,
    emailteacher: emailteacher,
    provinceteacher: provinceteacher,
    districtteacher: districtteacher,
    corregimientoteacher: corregimientoteacher,
    phototeacher: photosteacher,
    passwordteacher:passwordteacher,

})
const getTeacherSchema=Joi.object({
    id_card_teacher: id_card_teacher,
    firstnameteacher: firstnameteacher,
    firstlastnameteacher: firstlastnameteacher

})

module.exports={createTeacherSchema,updateTeacherSchema,getTeacherSchema}