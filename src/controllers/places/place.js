import Place from "../../models/places.js"

export const placeId = async(req, res) => {
  const placeId = req.params.id
  try {
    const place = await Place.findById(placeId)
    return res.status(201).json({succes:true,msg:'Lugar encontrado',place})
  } catch (error) {
    console.log(error)
    return res.status(500).json({succes:false,msg:'Error en el servidor'})
  }
}