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

app.put('/update/:id',(req,res)=>{
    const {id} = req.params;
    ToDoModel.updateOne({_id : id},{$set : { done : true}}).then((result)=>{
        res.json(result)
    }).catch((err)=>{
        res.json(err);
    })
})

app.delete('/delete/:id',(req,res)=>{
    const {id} = req.params;
    ToDoModel.deleteOne({_id:id}).then((result)=>{
        res.json(result)
    }).catch((err)=>{
        res.json(err)
    })
})
app.listen(5000,()=>{
    console.log("Server is Running http://localhost:5000");
})
