const Joi=require('joi')

const id_subject=Joi.string().min(4).max(10)
const namesubject=Joi.string().min(3).max(40)


const createSubjectSchema=Joi.object({

    id_subject:id_subject.required(),
    namesubject:namesubject.required(),
  
})
const updateSubjectSchema=Joi.object({
    id_subject:id_subject,
    namesubject:namesubject,
   
})
const getSubjectSchema=Joi.object({
    id_subject:id_subject,
})

module.exports={createSubjectSchema,updateSubjectSchema,getSubjectSchema}