import Event from "../../models/events.model.js"

export const newEvent = async(req, res) => {


  try {
      await Event.create(req.body)
      return res.status(201)
      .json({
        succes:true,
        msg:'Se creo el evvento correctamente'
      })
      
      }
    catch (error) {
      console.log(error)
      return res.status(500).json({
        success:false,
        msg:'Error interno del servidor'
      })

    }
}
