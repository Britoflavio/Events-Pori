import Place from '../../models/places.model.js'

export const newPlace = async(req, res) => {
  try {
    await Place.create(req.body)
    return res.status(201).
    json({
      succes:true,
      message: 'Successfully place created'
    })
  } catch (error) {
    
  }
}