import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        trim: true,
    },
    email:{
        type: String,
        required: true,
        trim: true,
        unique:true,
    },
    password:{
        type: String,
        required: true,
    },
    hasVoted: {
        type: Boolean,
        default: false // Para saber si ya ha votado
      }

}, {
    timestamps:true
})

export default mongoose.model('user',userSchema)