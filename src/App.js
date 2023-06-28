
import './App.css';
import { useState } from 'react';
import { Task } from "./task"


function App() {

const [todoList, setTodoLlist] = useState([]);
const [newTask, setNewTask] = useState("");


const handleChange = (event) =>{
  setNewTask(event.target.value);
}
const addTask= () =>{

const task ={
  id: todoList.length === 0 ? 1 : todoList[todoList.length -1].id+1,
  taskName: newTask
}

setTodoLlist([...todoList, task]);

}

const deleteTask = (taskId) =>{
console.log(taskId)
  setTodoLlist(todoList.filter((task) =>   taskId !== task.id));

}

  return (
    <div className="App">
<div className='addTask'>

 <input className='top-section' onChange={handleChange} type='text'/> 
 <button onClick={addTask}>Add Task</button>
 </div>




<div className='list'>

{todoList.slice().reverse().map((task)=>{
//return <Task taskName={task.taskName} id={task.id} deleteTask={deleteTask}/>
return <Task taskName={task.taskName} id={task.id} deleteTask={deleteTask}/>

})}

</div>

    </div>



  );
}

export default App;
