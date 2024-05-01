import Place from "../../models/places.js"

export const places = async(req, res) => {
  try {
    const places = await Place.find()
    return res.status(201).json({succes:true, places})
  } catch (error) {
    console.log(error)
  }
 
}