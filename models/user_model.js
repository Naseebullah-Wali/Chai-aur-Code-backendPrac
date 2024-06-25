import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        lowercase: true
    },
    email:{
        type: String,
        required: true,
        unique: [true, "Email already Exist"],
        lowercase: true
    },
    password: {
        type: String,
        required: [true, "Password is required"]
    }
}, {timestamps: true});



export const User = mongoose.model("User", userSchema)
