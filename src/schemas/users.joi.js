import Joi from "joi"

export const userSignUp = Joi.object(
  {
    name:Joi.string().required().min(4).max(12).messages({
      'any.required': 'Name required',
      'string.empty': 'Name required',
      'string.min': 'The name is too short, min 4 caracter',
      'string.max': 'The name can only contain 12 letters'
  }),
    lastname:Joi.string().required().min(3).max(15).messages({
      'any.required': 'Last name required',
      'string.empty': 'Last name required',
      'string.min': 'The last name is too short, min 3',
      'string.max': 'The last name can only contain 15 letters'
  }),
    photo:Joi.string().optional(),
    email:Joi.string().email({minDomainSegments:2}).required().messages({
      'any.required': 'Email required',
      'string.email': 'Email invalid format'
  }),
    password:Joi.string().required().min(7).max(16).messages({
      'any.required': 'Password required',
      'string.empty': 'Password required',
      'string.min': 'The name is too short, min 7 caracter',
      'string.max': 'The name can only contain 16 caracter'
  }),
    age:Joi.number().greater(1).less(99).required().messages({
      'any.required': 'Age required',
      'number.greater': 'Age accepted 1 to 99',
      'number.less': 'Age accepted 1 to 99'
    }),
    genre:Joi.string().optional(),
  }
)

export const userLogin = Joi.object({
  email:Joi.string().email({minDomainSegments:2}).required().messages({
    'any.required': 'Email required',
    'string.email': 'Email invalid format'
}),
  password:Joi.string().required().messages({
    'any.required': 'Password required',
})
})