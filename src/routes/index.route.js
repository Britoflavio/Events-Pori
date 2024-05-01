import {Router} from 'express'
import userRoute from './users.route.js'
import placeRouter from './place.route.js'
import eventRouter from './events.route.js'
const router = Router()

//Pagiina main
router.get('/', (req, res) => {
  res.send('Hola locomotora!')
})


router.use('/users', userRoute)
router.use('/places', placeRouter)
router.use('/events', eventRouter)

export default router