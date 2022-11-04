const Joi=require('joi')

const id_classroom=Joi.string().min(2).max(10)
const pavilionclassroom=Joi.string().min(1).max(40)
const capacityclassroom=Joi.number().min(2).max(20)


const createClassroomSchema=Joi.object({

    id_classroom:id_classroom.required(),
    pavilionclassroom:pavilionclassroom.required(),
    capacityclassroom:capacityclassroom.required()

})
const updateClassroomSchema=Joi.object({
    id_classroom:id_classroom,
    pavilionclassroom:pavilionclassroom,
    capacityclassroom:capacityclassroom
})
const getClassroomSchema=Joi.object({
    id_classroom:id_classroom,
})

module.exports={createClassroomSchema,updateClassroomSchema,getClassroomSchema}