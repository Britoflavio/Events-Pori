
import Event from "../../models/events.model.js"

export const events = async(req, res) => {
  try {
    const events = await Event.find(req.body)
    return res.status(201).json({
      success:true,
      msg:'Todos los eventos',
      events
    })
  } catch (error) {
    console.log(error)
    return res.status(500).json(
      {
        success:false,
        msg:'Error en el servidor'
      }
    )
  }
}