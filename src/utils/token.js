import jwt from 'jsonwebtoken'

export const tokenSign = async (user) => {
  return jwt.sign({
    id: user._id,
    name: user.name,
    role: user.role
  },
  process.env.JWT_SECRET,
  {
    expiresIn: '2HR'
  }
)
}

export const verifyToken = async (token) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET)
  } catch (error) {
    return 'No hay token'
  }
}