import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
    },
    complete: {
        type: Boolean,
        default: false
    },
    createdBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    subTodos: [
        {
            types: mongoose.Schema.Types.ObjectId,
            ref: "subTodo"
        }
    ]
   
}, {timestamps: true});



export const todo = mongoose.model("todo", todoSchema)
