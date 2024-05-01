import User from '../../models/users.js'

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