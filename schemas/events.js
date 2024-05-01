import Joi from "joi"

export const events = Joi.object({
  name:Joi.string().required().min(4).max(16).messages({
    'any.required': 'Name required',
    'string.empty': 'Name required',
    'string.min': 'The name is too short, min 4 caracter',
    'string.max': 'The name can only contain 16 letters'
}),
  date:Joi.date().required(),
  photo:Joi.string().optional(),
  desciption:Joi.string().required().min(10).max(60).messages({
    'any.required': 'Description required',
    'string.empty': 'Description required',
    'string.min': 'the description is very short, min 10 caracter',
    'string.max': 'description can only contain 60 caracter'
}),
  age:Joi.number().required(),
})