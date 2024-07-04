import { verifyToken } from "../utils/token.js"
import User from "../models/users.model.js"
import Event from "../models/events.model.js"

export const checkAuth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ').pop()
    const tokenData = await verifyToken(token)
    
    if (tokenData.id){
      next()
    }else{
      res.status(409)
      res.send({msg: 'No estas autorizado'})
    }
  } catch (error) {
    res.status(409)
    res.send({msg: 'No estas autorizado '})
  }
}

export const checkRole = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ').pop()
    const tokenData = await verifyToken(token)
    const userData = await User.findById(tokenData.id)
  
    if (userData.role == 'organizer'){
      
      next()
    }else{
      res.status(409)
      res.send({msg: 'No sos organizador'})
    }
  } catch (error) {
    res.status(409)
    res.send({msg: 'No estas autorizado '})
  }
}

export const checkCreator = async (req, res, next) => {
  const id_event = req.params.id

  try {
    const token = req.headers.authorization.split(' ').pop()
    const tokenData = await verifyToken(token)
    const userData = await User.findById(tokenData.id)
    const eventid = await Event.findById(id_event)
    
    if (eventid.organizer == userData.id){
      next()
      
    }else{
      res.status(409)
      res.send({msg: 'No sos el organizador'})
    }
  } catch (error) {
    res.status(409)
    res.send({msg: 'No estas autorizado '})
  }
}
