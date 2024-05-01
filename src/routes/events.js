import {Router} from 'express'
import { newEvent } from '../controllers/events/newEvent.js'
import { events } from '../controllers/events/events.js'
import { eventId } from '../controllers/events/eventId.js'
const router = Router()

router.get('/', events)
router.get('/:id', eventId)
router.post('/newEvent', newEvent)


export default  router