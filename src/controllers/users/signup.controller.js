import User from "../../models/users.model.js" 
import bycrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const secret = process.env.SECRET
export let create = async(req, res) => {

  req.body.password = bycrypt.hashSync(req.body.password, 10)
  req.body.role = 'user'

  try {
    const emailIngresado = req.body.email
    const repeatEmail = await User.findOne({'email':emailIngresado},{name:1})

    if(!repeatEmail){
     
      await User.create(req.body)
      return res.status(201).json({
       success:true,
       user:req.body,
     
      })
    }else{
      return res.status(400).json({
        success:false,
        msg:'Email en uso'
      })
    }
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      success:false,
      msg:'Interna Server Error'
    })
  }
  
 
}