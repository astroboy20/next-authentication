import { Schema,model,models } from "mongoose";
import Email from "next-auth/providers/email";


const userSchema = new Schema({
    username:String,
    email:String,
    password:String
})

const Users = models.user || model('user',userSchema)

export default Users