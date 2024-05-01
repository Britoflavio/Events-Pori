import { Router } from "express"
import { newPlace } from "../controllers/places/createdPlace.controller.js"
import { places } from "../controllers/places/places.controller.js"
import { placeId } from "../controllers/places/placeId.controller.js"

const router = Router()

router.get('/', places)
router.get('/:id', placeId)
router.post('/newPlace', newPlace)

export default router