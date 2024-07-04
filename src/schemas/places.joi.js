import Joi from 'joi'

export const places = Joi.object(
  {
  name:Joi.string().required().max(18).min(4),
  addres:Joi.string().required(),
  photo:Joi.string().optional(),
  date:Joi.date().required(),
  occupancy:Joi.number().required()
  }
)