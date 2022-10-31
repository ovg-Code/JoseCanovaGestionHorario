const Joi=require('joi')

const id_card_guardian=Joi.string().min(10).max(10)
const firstnameguardian=Joi.string().min(2).max(40)
const secondnameguardian=Joi.string().min(2).max(40)
const firstlastnameguardian=Joi.string().min(2).max(40)
const secondlastnameguardian=Joi.string().min(2).max(40)
const phonenumberguardian=Joi.string().min(6).max(10)
const emailguardian=Joi.string().min(10).max(100)
const provinceguardian=Joi.string().min(10).max(60)
const districtguardian=Joi.string().min(10).max(60)
const corregimientoguardian=Joi.string().min(10).max(60)
const photoguardian=Joi.string().min(10).max(100)
const passwordguardian=Joi.string().min(6).max(10)

const createGuardianSchema=Joi.object({
    id_card_guardian: id_card_guardian.required(),
    firstnameguardian: firstnameguardian.required(),
    secondnameguardian:secondnameguardian,
    firstlastnameguardian: firstlastnameguardian.required(),
    secondlastnameguardian: secondlastnameguardian,
    phonenumberguardian: phonenumberguardian.required(),
    emailguardian: emaiguardiant,
    provinceguardian: provinceguardian.required(),
    districtguardian: districtguardian.required(),
    corregimientoguardian: corregimientoguardian.required(),
    photoguardian: photoguardian,
    passwordguardian:passwordguardian.required(),

})
const updateGuardianSchema=Joi.object({
    id_card_guardian: id_card_guardian,
    firstnameguardian: firstnameguardian,
    secondnameguardian:secondnameguardian,
    firstlastnameguardian: firstlastnameguardian,
    secondlastnameguardian: secondlastnameguardian,
    phonenumberguardian: phonenumberguardian,
    emailguardian: emailguardian,
    provinceguardian: provinceguardian,
    districtguardian: districtguardian,
    corregimientoguardian: corregimientoguardian,
    photoguardian: photosguardian,
    passwordguardian:passwordguardian,

})
const getGuardianSchema=Joi.object({
    id_card_guardian: id_card_guardian,
    firstnameguardian: firstnameguardian,
    firstlastnameguardian: firstlastnameguardian

})

module.exports={createGuardianSchema,updateGuardianSchema,getGuardianSchema}