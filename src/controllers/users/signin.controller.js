import { resolveSoa } from 'dns'
import User from '../../models/users.model.js'
import bycrypt from 'bcrypt'


export let signin = async(req, res, next) => {

  const email = req.body.email
  const userPass = req.body.password
  
  try {

    const users = await User.findOne({email:email})

    if(bycrypt.compareSync(userPass, users.password)){
      return res.status(201).json({
        success:true,
        msg:'Password correcto'
      })
    }else{
      return res.status(400).json({msg:'Password failed'})
    }

  }catch (error) {
    console.log(error)
    return res.status(500).json({
      success:false,
      msg:'Error en el servidor'
    })
  }
}

// buscar con findOne email exist =>> error