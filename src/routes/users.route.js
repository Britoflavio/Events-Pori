import {Router} from 'express'
import {read} from '../controllers/users/users.controller.js'
import { create } from '../controllers/users/signup.controller.js'
import { signin } from '../controllers/users/signin.controller.js'
import { userSignUp, userLogin } from '../../schemas/users.joi.js'
import { validator } from '../../middlewares/validator.js'

const router = Router()

router.get('/', read)
router.post('/signup',validator(userSignUp), create)
router.post('/login',validator(userLogin), signin)

export default router