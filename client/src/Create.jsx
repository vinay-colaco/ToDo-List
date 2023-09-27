import { useState } from "react"
import axios from 'axios';

function Create() {
  const [task,setTask] = useState()
  function handleAdd(){
    axios.post('http://localhost:5000/add',{task:task}).then((result)=>console.log(result)).catch((err)=> console.log(err));
  }
  return (
    <div className="create_form">
        <input type="text" placeholder="Enter Task" onChange={(e)=>setTask(e.target.value)}/>
        <button onClick={handleAdd}>Add</button>
    </div>
  )
}
export default Create