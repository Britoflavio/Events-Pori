import User from '../../models/users.model.js'
import bycrypt from 'bcrypt'


export let signin = async(req, res, next) => {

  const data = {
    email: req.body.email,
    password:req.body.password
  }
  
  try {

    const user = await User.findOne({email: data.email})

      if(!user){
        return res.status(401).json({
          msg: 'Usuario no encontrado'
        })
      }
      
      if(bycrypt.compareSync(data.password, user.password)){
        return res.status(201).json({
          success:true,
          msg:'Password correcto'
      })
      }else{
       return res.status(400).json({
        msg:'Password incorrecta'
      })
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