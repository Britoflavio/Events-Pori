import { Schema, Types, model } from "mongoose"

const schema = new Schema({
  name: {type:String,required:true},
  addres:{type:String,required:true},
  photo: {type:String},
  date: {type:Types.ObjectId, ref:'events'},
  occupancy:{type:Number,required:true}
})

const collection = 'places'

const Place = model(collection, schema)

export default Place