import {Router} from 'express'
import { newEvent } from '../controllers/events/eventCreated.controller.js'
import { events } from '../controllers/events/events.controller.js'
import { eventId } from '../controllers/events/eventId.controller.js'
import { attendes } from '../controllers/events/attendes.controller.js'
import { eventModify } from '../controllers/events/modify.event.controller.js'
import { checkRole, checkCreator } from '../middlewares/token.middle.js'
const router = Router()

router.get('/', events)
router.get('/:id', eventId)
router.post('/newEvent',checkRole, newEvent)
router.post('/modify/:id',checkCreator ,eventModify)
router.post('/attendes', attendes)


export default  router