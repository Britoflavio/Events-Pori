import passport from 'passport-jwt'
import User from '../models/users.model.js'
passport.user(
  new passport.Strategy({
    jwtFromRequest: passport.ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET
  },
  async(jwtPayload, done) => {
    try {
      const user = await User.findOne({id:jwtPayload.id})
      if (user) {
        return done(null, user)
      } else {
        return done(null, false)
      }
    } catch (error) {
      return done(error, false)
    }
  })
)

export default passport