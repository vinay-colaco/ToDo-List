import mongoose from "mongoose";

const ToDoSchema = mongoose.Schema({
    task : String
})

const ToDoModel =mongoose.model("todos",ToDoSchema);

export default ToDoModel;