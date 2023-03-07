import mongoose from "mongoose";

const contactSchema=new mongoose.Schema(
    {
        name:String,
        email:{
            type:String,
            required:true
        },
        message:String
    }
 )
 export default mongoose.model('Contacts',contactSchema)