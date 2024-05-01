import Event from "../../models/events.js"

export const eventId = async(req,res) => {

  const event = req.params.id

  try {
    const eventId = await Event.findById(event)
    
    return res.status(201).json({
      succes:true,
      msg:'Evento encontrado',
      eventId
    })
  } catch (error) {
    console.log(error)
    return res.status(500).json({succes:false,msg:'Error del servidor'})
  }






}