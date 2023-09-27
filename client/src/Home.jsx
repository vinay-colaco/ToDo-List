import { useEffect, useState } from 'react'
import Create from './Create'
import axios from 'axios'
import './App.css'
import { BsCircleFill, BsFillTrashFill } from "react-icons/bs";


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
  return (
    <div className='home'>
      <h2>Todo List</h2>
      <Create/>
      {
        todos.length===0 ?
        <h2>No Records</h2>
        : todos.map(todo=>(
          <div className='task'>
            <div className='chechbox'>
            
            <p> <BsCircleFill className='icon'/> {todo.task}</p>
          </div>
          <div>
            <span><BsFillTrashFill className='icon'/></span>
          </div>
          </div>

        ))
      }
    </div>
  )
}
export default Home