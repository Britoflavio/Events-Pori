import User from '../../models/users.model.js'

export const read = async(req, res) => {
  try {
    const all = await User.find()
    return res.status(200)
    .json(
      all
    )
  } catch (error) {
    
  }
}