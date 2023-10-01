import { useEffect, useState } from 'react'
import Create from './Create'
import axios from 'axios'
import './App.css'
import { BsCircleFill, BsFillCheckCircleFill, BsFillTrashFill } from "react-icons/bs";


function Home() {
  const [todos,setTodos] = useState([])
  useEffect(()=>{
    axios.get('http://localhost:5000/get').then((result)=>
    { 
      setTodos(result.data)
    }).catch((err)=>{
      console.log(err);
    })
  },[])
  const handleEdit = (id)=>{
    axios.put('http://localhost:5000/update/'+id).then((result)=>
    { 
      location.reload();
    }).catch((err)=>{
      console.log(err);
    })
  }

  const handleDelete = (id)=>{
    axios.delete('http://localhost:5000/delete/'+id).then((result)=>{
      console.log(result)
    }).catch((err)=>{
      console.log(err);
    })
  }
  return (
    <div className='home'>
      <h2>Todo List</h2>
      <Create/>
      {
        todos.length===0 ?
        <h2>No Records</h2>
        : todos.map(todo=>(
          <div className='task'>
            <div className='chechbox' onClick={()=> handleEdit(todo._id)}> 
         
            
            <p className={todo.done? 'line_through':""}> { todo.done ? 
              <BsFillCheckCircleFill></BsFillCheckCircleFill>
              : <BsCircleFill className='icon'/>} {todo.task}</p>
          </div>
          <div>
            <span><BsFillTrashFill className='icon' onClick={()=> handleDelete(_id)}/></span>
          </div>
          </div>

        ))
      }
    </div>
  )
}
export default Home