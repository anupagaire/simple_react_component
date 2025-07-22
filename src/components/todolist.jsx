import React from 'react';
import { useState } from 'react';
import '../css/style.css';


const TodoList = () => {
    const [inputtask,setInputtask]=useState('');
    const [tasklist,settasklist]=useState([]);

    function addtask(){
    if(inputtask.trim())
      {settasklist([  ...tasklist, inputtask]);
        setInputtask('');
      }

};
   const deleteTask = (deleteIndex) => {
    const updatedTasks = tasklist.filter((_, currentIndex) => currentIndex !== deleteIndex);
      settasklist(updatedTasks);
};


    return(
        
         <div className="todolist">
            <h1 className='todo_heading'>To Do List</h1>
            <label>Enter a task:
                <input type="text" className='todo_input' placeholder='Add a new task' 
                value={inputtask}
                onChange={(e) =>setInputtask(e.target.value)}
            />
            <button className='button' onClick={addtask}>Add Task</button> 
            </label>


            <div className="skills">
                <h3>List of Tasks</h3>
           <ul>
                      {tasklist.map((task, index) => (
                        <li className="skills_list" key={index}>
                            {task}
                            <button className="button" onClick={() => deleteTask(index)}>
                                Delete Task
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
export default TodoList;


