import {Router} from 'express'
import userRoute from './users.js'
import placeRouter from './place.js'
import eventRouter from './events.js'
const router = Router()

//Pagiina main
router.get('/', (req, res) => {
  res.send('Hola locomotora!')
})


router.use('/users', userRoute)
router.use('/places', placeRouter)
router.use('/events', eventRouter)

export default router