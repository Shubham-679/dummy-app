import axios from 'axios';

export const addUser = (values) => async (dispatch) => {
    const { data : newUser } = await axios.post("http://localhost:4000/users",values);
    dispatch({
      type: 'ADD_USER',
      payload : newUser
    });
  };

  export const findUser = (values) => async (dispatch) => {
   const { data : user } = await axios.post("http://localhost:4000/users/login",values);
    dispatch({
      type: 'FIND_USER',
      payload : user
    });
    return user;
  };

  export const addTask = (text , token) => async (dispatch) => {
    const obj = { description : text }
    const { data : newTask } = await axios.post("http://localhost:4000/tasks",obj , {
      headers: { "x-auth-token": token }
    });
    console.log(newTask)
    dispatch({
      type: 'ADD_TASK',
      payload : newTask
    });
  };


  export const getTasks = (token) => async (dispatch) => {
    console.log("in action")
    const { data : tasks } = await axios.get("http://localhost:4000/tasks" , {
      headers: { "x-auth-token": token }
    });
     dispatch({
       type: 'GET_TASKS',
       payload : tasks
     });
  }
  
