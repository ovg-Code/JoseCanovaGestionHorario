const Joi=require('joi')

const id_group=Joi.string().min(5).max(15)
const fk_id_group=Joi.string().min(5).max(15)
const fk_id_laboratory=Joi.string().min(2).max(15)
const yeargroup=Joi.string().min(4).max(40)
const levelgroup=Joi.string().min(1).max(40)
const lettergroup=Joi.string().min(1).max(40)
const periodgroup=Joi.string().min(1).max(40)
const fk_id_classroom=Joi.string().min(2).max(15)

const createGroupSchema=Joi.object({

    id_group:id_group.required(),
    yeargroup:yeargroup.required(),
    levelgroup:levelgroup.required(),
    lettergroup:lettergroup.required(),
    periodgroup:periodgroup.required(),
    fk_id_classroom:fk_id_classroom.required()
})
const updateGroupSchema=Joi.object({
    id_group:id_group,
    yeargroup:yeargroup,
    levelgroup:levelgroup,
    lettergroup:lettergroup,
    periodgroup:periodgroup,
    fk_id_classroom:fk_id_classroom
})

const addLaboratory=Joi.object({
    fk_id_group:id_group.required(),
    fk_id_laboratory:fk_id_laboratory.required()
})

const getGroupSchema=Joi.object({
    id_group:id_group,
})

module.exports={createGroupSchema,updateGroupSchema,getGroupSchema, addLaboratory}