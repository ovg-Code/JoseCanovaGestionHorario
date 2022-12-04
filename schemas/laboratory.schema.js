const Joi=require('joi')

const id_laboratory=Joi.string().min(2).max(10)
const pavilionlaboratory=Joi.string().min(1).max(40)
const typelaboratory=Joi.string().min(2).max(40)


const createLaboratorySchema=Joi.object({

    id_laboratory:id_laboratory.required(),
    pavilionlaboratory:pavilionlaboratory.required(),
    typelaboratory:typelaboratory.required()

})
const updateLaboratorySchema=Joi.object({
    id_laboratory:id_laboratory,
    pavilionlaboratory:pavilionlaboratory,
    typelaboratory:typelaboratory
})
const getLaboratorySchema=Joi.object({
    id_laboratory:id_laboratory,
})

module.exports={createLaboratorySchema,updateLaboratorySchema,getLaboratorySchema}