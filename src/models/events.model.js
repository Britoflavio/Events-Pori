import {Schema, model, Types} from "mongoose"

const schema = new Schema({
  place:{type:Types.ObjectId, ref:'places'},
  date: {type:Date,required:true},
  name: {type:String,required:true},
  photo:{type: String},
  description: {type:String,required:true},
  attendes: {type:Types.ObjectId, ref: 'users'},
  minimunAge:{type:Number,required:true},
  organizer: {type:Types.ObjectId, ref:'users'}
})

const collection = 'events'

const Event = model(collection, schema)

export default Event