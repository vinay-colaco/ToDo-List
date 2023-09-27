import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import ToDoModel from "./todo.js";


const app =express();

app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://127.0.0.1:27017/test')
app.get('/get',(req,res)=>{
    ToDoModel.find().then((result)=>{
        res.json(result)
    }).catch((err)=>{
        res.json(err)
    })
})

app.post('/add',(req,res)=>{
    const task =req.body.task;

    ToDoModel.create({
        task:task
    }).then((result)=>{
        res.json(result)
    }).catch((err)=>{
        res.json(err)
    })

})

app.listen(5000,()=>{
    console.log("Server is Running");
})