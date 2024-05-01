import 'dotenv/config.js'
import './config/database.js'
import cors from 'cors'
import express from 'express'
import morgan from 'morgan'

import indexRouter from './routes/index.js'

const app = express()
const port = 3000

//middleware
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

//rutas
app.use('/', indexRouter)

app.listen(port, () => {
  console.log(`Server done in http://localhost:${port}`)
})

export default app