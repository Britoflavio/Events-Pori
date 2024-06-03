import User from "../../models/users.model.js"
import jwt from 'jsonwebtoken'

export let userEdit = async(req, res) => {

  const userId = req.params.id
  console.log(userId)
  try {
    
      await User.findByIdAndUpdate(userId,{
        name: req.body.name,
        lastname: req.body.lastname,
        email: req.body.email,
        age: req.body.age
      })
      
      return res.status(201).json({
        succes:true,
        msg:'User actualizado',
        edit:req.body
      })

  } catch (error) {
    console.log(error)
  }
}