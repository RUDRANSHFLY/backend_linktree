import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    userName : {
        type : String ,
        required : true,
        unique : true,
    },
    occupation : {
        type : String ,
        required : false,
    },
    email : {
        type : String ,
        required : true,
        unique : true,
    },
    phoneNumber : {
        type : String ,
        required : false,
    },
    password : {
        type : String ,
        required : true,
    },
    referralCode :
    {
        type : String,
        required : false,
        index : true,
    },
    referredBy : {
        type : mongoose.Schema.Types.ObjectId , 
        ref : "User",
        default: null ,
    }

} , {timestamps : true});


const User = mongoose.model('User',userSchema);

export default User;