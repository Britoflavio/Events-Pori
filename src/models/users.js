import {Schema, model, Types} from "mongoose"

let schema = new Schema({
  name: {type:String,required:true},
  lastname: {type:String,required:true},
  photo:{type:String,required:false},
  email:{type:String,required:true},
  password:{type:String,required:true},
  age:{type:Number,required:true},
  genre:{type:String,required:false},
  events: {type:Types.ObjectId, ref:'events'},
  role:{type:String,required:true}
})

let collection = 'users'

let User = model(collection, schema)

export default User
