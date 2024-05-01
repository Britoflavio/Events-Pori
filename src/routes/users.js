import {Router} from 'express'
import {read} from '..//controllers/users/read.js'
import { create } from '../controllers/users/signup.js'
import { signin } from '../controllers/users/signin.js'
import { userSignUp, userLogin } from '../../schemas/users.js'
import { validator } from '../../middlewares/validator.js'

const router = Router()

router.get('/', read)
router.post('/signup',validator(userSignUp), create)
router.post('/login',validator(userLogin), signin)

export default router