import mongoose from "mongoose";

const ToDoSchema = mongoose.Schema({
    task : String,
    done : {
        type : Boolean,
        default : false
    }
})

const ToDoModel =mongoose.model("todos",ToDoSchema);

export default ToDoModel;