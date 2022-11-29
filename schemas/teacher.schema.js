const Joi=require('joi')

const id_card_teacher=Joi.string().min(5).max(10)
const firstnameteacher=Joi.string().min(2).max(40)
const secondnameteacher=Joi.string().min(2).max(40)
const firstlastnameteacher=Joi.string().min(2).max(40)
const secondlastnameteacher=Joi.string().min(2).max(40)
const phonenumberteacher=Joi.string().min(6).max(10)
const emailteacher=Joi.string().min(10).max(100)
const provinceteacher=Joi.string().min(2).max(60)
const districtteacher=Joi.string().min(2).max(60)
const corregimientoteacher=Joi.string().min(2).max(60)
const phototeacher=Joi.string().min(10).max(100)
const passwordteacher=Joi.string().min(6).max(10)
const fk_id_group=Joi.string().min(6).max(10)
const id_subject=Joi.string().min(4).max(10)
const dayteachersubjectgroup=Joi.string().min(4).max(10)
const  hourteachersubjectgroup= Joi.string().min(4).max(10)

const createTeacherSchema=Joi.object({
    id_card_teacher: id_card_teacher.required(),
    firstnameteacher: firstnameteacher.required(),
    secondnameteacher:secondnameteacher,
    firstlastnameteacher: firstlastnameteacher.required(),
    secondlastnameteacher: secondlastnameteacher,
    phonenumberteacher: phonenumberteacher.required(),
    emailteacher: emailteacher,
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
    phototeacher: phototeacher,
    passwordteacher:passwordteacher,

})
const addSubject=Joi.object({
    fk_id_card_teacher: id_card_teacher.required(),
    fk_id_group:fk_id_group.required(),
    fk_id_subject:id_subject.required(),
    hourteachersubjectgroup : hourteachersubjectgroup.required(),
    dayteachersubjectgroup:dayteachersubjectgroup.required()

})
const getTeacherSchema=Joi.object({
    id_card_teacher: id_card_teacher,
    firstnameteacher: firstnameteacher,
    firstlastnameteacher: firstlastnameteacher

})

module.exports={createTeacherSchema,updateTeacherSchema,getTeacherSchema,addSubject}   