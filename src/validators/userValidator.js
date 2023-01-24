import Joi from "joi"

const userValidator=Joi.object({

    name:Joi.string().regex(/^[a-z A-Z]+(?:\s+[a-z A-Z]+){1,2}$/).required().messages({'string.pattern.base':'Enter name and surname.Use liters from a-z to A-Z'}),

    username:Joi.string().regex(/^[a-z A-Z]{1,20}$/).required().messages({'string.pattern.base':'Use liters from a-z to A-Z'}),

    email:Joi.string().regex(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/).required().messages({'string.pattern.base':'Not valid email'})
})
export {userValidator}
