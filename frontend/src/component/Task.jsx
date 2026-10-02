import React from 'react'
import { useState,useEffect } from 'react';
import './task.css';
import axios from 'axios';
function Task() {
    const [task,setTask] = useState("");
    const [showTask, setShowTask] = useState([]);
    const handleSubmit = (e) => {
        e.preventDefault();
       const todoTask= async () => {
        const response = await axios.post("http://localhost:5000/api/task/addTask", {title:task });
        console.log(response.data);
        setTask(""); 
        getTasks();
  
    }
        todoTask();
    }

    const getTasks = async()=>{
        const response = await axios.get("http://localhost:5000/api/task/getAllTasks");
        console.log(response.data);
        setShowTask(response.data.tasks);
    }
    useEffect(()=>{
        getTasks();
    },[]);

    // const deleteTask= async (id)=>{
    //     const response = await axios.delete(`http://localhost:5000/api/task/deleteTask/${id}`);
    //     console.log(response.data);
    //     getTasks();
    // };

const updateTask = async (id) => {
    const response = await axios.patch(
        `http://localhost:5000/api/task/updateTask/${id}`,
        { completed: true }
    );
    // console.log(response.data);
    getTasks();
};

  return (
    <div>
        <div className="task-container">
         <div className="task-card">
           <h1 className="task-title">Task Manager</h1>
            <form className="task-form" onSubmit={handleSubmit}>
                <input className="task-input" type="text" placeholder='Enter task' value={task} onChange={(e) => setTask(e.target.value)} />
                <button  className="add-btn" type="submit">Add Task</button>
            </form>
           
            <ul className="task-list">
                 {showTask.map((task)=>(
                    <li  className="task-item" key={task._id}><span style={{textDecoration: task.completed ? "line-through" : "none"}}> {task.title}</span>
                        {!task.completed && ( <button className="complete-btn" onClick={() => updateTask(task._id)}>Mark Complete </button> )}
                    </li>   
                 ))}
            </ul>   
            
        </div>
       </div>
    </div>
  )
}

export default Task;