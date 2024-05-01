import User from "../../models/users.model.js"
import jwt from 'jsonwebtoken'

export let userEdit = async(req, res) => {

  const userId = req.params._id
  console.log(userId)
  try {
    
      const edit = await User.findByIdAndUpdate(userId,{
        name: userId.name,
        lastname: userId.lastname,
        email: userId.email,
        age: userId.age
      })
      
      return res.status(201).json({
        succes:true,
        msg:'User actualizado',
        edit
      })

  } catch (error) {
    console.log(error)
  }
}