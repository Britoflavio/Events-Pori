import Event from "../../models/events.model.js"

export let eventModify = async (req, res) => {

  const eventId = req.params.id

  try {
    await Event.findByIdAndUpdate(eventId,{
      name: req.body.name,
      description: req.body.description
    })
    console.log(eventId, req.body)
    return res.status(201)
    .json({
      succes: true,
      msg:'Se actualizo el evento correctamente',
      edit:req.body
    })
  } catch (error) {
    console.log(error)
  }
}