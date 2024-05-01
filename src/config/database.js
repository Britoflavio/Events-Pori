import mongoose from "mongoose"

mongoose.connect(process.env.DB_CONNECTION)
  .then(connection => {
    console.log('BD CONNECTED')
  })
  .catch(err => {console.log('Error en bd')})