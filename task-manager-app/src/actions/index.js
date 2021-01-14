import axios from 'axios';

export const addUser = (values) => async (dispatch) => {
    const { data : newUser } = await axios.post("http://localhost:4000/users",values);
    dispatch({
      type: 'ADD_USER',
      payload : newUser
    });
  };

  export const findUser = (values) => async (dispatch) => {
    console.log("before value",values)
   const { data : user } = await axios.post("http://localhost:4000/users/login",values);
    console.log("after", user)
    dispatch({
      type: 'FIND_USER',
      payload : user
    });
  };
