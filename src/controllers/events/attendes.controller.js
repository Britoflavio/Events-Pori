import Event from "../../models/events.model.js"
import User from '../../models/users.model.js'
import Place from "../../models/places.model.js"

export const attendes = async(req, res) => {
  
  const {userId, eventId, placeId} = req.body
  
  try {

    const user = await User.findById(userId)
    const event = await Event.findById(eventId)
    const place = await Place.findById(placeId)
    
    if(!user){
      return res.status(404).json({
        msg: 'Iniciar sesion para utilizar esta funcion'
      })
    }
    if(!event){
      return res.status(404).json({
        msg: 'Evento no disponible'
      })
    }
    if(user.age < event.minimunAge){
      return res.status(400).json({
        msg: 'No supera la edad minima para ingresar al evento'
      })
    }
    if(event.attendes.includes(userId)){
      return res.status(400).json({
        msg:'El usuario ya esta registrado'
      })
    }
    if(place.occupancy <= 0){
      return res.status(404).json({
        msg: 'No hay lugar disponible'
      })
    }
    
    event.attendes.push(userId)
    place.occupancy -= 1

    event.save()
    place.save()
   
    return res.status(200).json({ msg: 'Registro exitoso al evento' })
  } catch (error) {
    return res.status(500).json({ msg: 'Error en el servidor' })
  }

}