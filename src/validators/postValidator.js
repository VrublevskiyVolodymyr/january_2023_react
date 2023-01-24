import Joi from "joi"

const postValidator=Joi.object({

    title:Joi.string(),

    body:Joi.string()
})
export {postValidator}
