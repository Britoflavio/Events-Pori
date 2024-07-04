import User from '../../models/users.model.js'
import bycrypt from 'bcrypt'
import { tokenSign } from '../../utils/token.js'

export let signin = async(req, res, next) => {
  
  const data = {
    email: req.body.email,
    password:req.body.password
  }
  
  try {
    const user = await User.findOne({email: data.email})
    const tokenSession = await tokenSign(user)

      if(!user && data.password){
        return res.status(401).json({
          msg: 'Password o Email no validos'
        })
      }
      
      if(bycrypt.compareSync(data.password, user.password)){
        return res.status(201).json({
          success:true,
          msg:'Logeo exitoso',
          email:req.body.email,
          tokenSession
      })
      
      }

  }catch (error) {
    return res.status(500).json({
      success:false,
      msg:'Error en el servidor'
    })
  }
}

// buscar con findOne email exist =>> error

  /*  const userToken = {
        id: user._id,
        name: user.name
      } */
  
     /*  const token = jwt.sign({
        userToken,
        exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 2
      }, '123') */