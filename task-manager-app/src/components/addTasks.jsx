import React, {useState } from 'react';


const Tasks = (props) => {

    const [ tasks , setTasks ] = useState([
        { id : 1 , text: "John" },
        { id : 2 , text: "Steve" },
        { id : 3 , text: "Martin" }
    ])

    let input = React.createRef();

    const handleOnsubmit = (e) => {
        e.preventDefault();
       let addTask =  input.current.value;
        console.log("submitted",addTask);
       
        let id=4;
        let obj = { 
            id: id,
            text : addTask
        }
        tasks.push(obj)
        setTasks((tasks) => [...tasks]);
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
                        {task.text}

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