import React, {useState, useEffect} from 'react';
import { useSelector , useDispatch } from "react-redux";
import { addTask,getTasks } from '../actions';

const Tasks = (props) => {
    const users = useSelector(state => state.users)
    const tasks = useSelector(state => state.tasks)
    const dispatch = useDispatch();
    console.log(users);
    console.log(tasks)

    let token = localStorage.getItem("x-auth-token");
        if(token === null){
          localStorage.setItem("x-auth-token", "");
          token = "";
        }
    useEffect(() => {
        dispatch(getTasks(token))
    }, [dispatch, token])
    
    let input = React.createRef();

    const handleOnsubmit = (e) => {
        e.preventDefault();
       let task =  input.current.value;
        console.log("submitted",task);
        dispatch(addTask(task , token))
    }

    const handleUpdate = (task) => {

    }

    const handleRemove = (task) => {

    }

    return ( 
        <div className="container">

            <div className="m-5">
                <h1> Welcome User..! </h1>
                <h4> Now You Can Add Your Tasks... Here </h4>
            </div>


            <form onSubmit={handleOnsubmit}>
                <input type="text" id="add" ref={input}
                 placeholder="Add New Task..."
                 className="m-2" />
                <button className="btn btn-primary m-2" >Add</button>
            </form>


            <div className="container col-6">
                <ul className="list-group">
                    {tasks.map((task) => (
                        <li
                        className="list-group-item"
                        key={task.id}
                        // onClick={() => toggleTask(task.id)}
                        style={{
                            textDecoration: task.completed ? 'line-through' : 'none'
                        }}
                        >  
                        {task.description}

                        <button 
                        className="btn btn-warning btn-sm float-right m-2"
                        onClick={() => handleUpdate(task)}
                         > Update </button>

                        <button 
                        className="btn btn-danger btn-sm float-right m-2" 
                        onClick={() => handleRemove(task)}
                        > Remove </button>
                        
                        </li> 
                    ))}
                </ul>
            </div>


        </div>
     );
}
 
export default Tasks ;