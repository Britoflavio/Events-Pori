import { Router } from "express"
import { newPlace } from "../controllers/places/newPlace.js"
import { places } from "../controllers/places/places.js"
import { placeId } from "../controllers/places/place.js"

const router = Router()

router.get('/', places)
router.get('/:id', placeId)
router.post('/newPlace', newPlace)

export default router