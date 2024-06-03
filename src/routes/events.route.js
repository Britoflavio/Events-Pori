import {Router} from 'express'
import { newEvent } from '../controllers/events/eventCreated.controller.js'
import { events } from '../controllers/events/events.controller.js'
import { eventId } from '../controllers/events/eventId.controller.js'
import { attendes } from '../controllers/events/attendes.controller.js'
const router = Router()

router.get('/', events)
router.get('/:id', eventId)
router.post('/newEvent', newEvent)
router.post('/attendes', attendes)


export default  router