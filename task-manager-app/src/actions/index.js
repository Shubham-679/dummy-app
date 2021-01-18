import axios from "axios";

export const addUser = (values) => async (dispatch) => {
  const {
    data: newUser
  } = await axios.post(
    "http://localhost:4000/users",
    values
  );
  dispatch({
    type: "ADD_USER",
    payload: newUser,
  });
};

export const findUser = (values) => async (dispatch) => {
  const {
    data: user
  } = await axios.post(
    "http://localhost:4000/users/login",
    values
  );
  dispatch({
    type: "FIND_USER",
    payload: user,
  });
  return user;
};

export const logoutUser = (token) => async (dispatch) => {
  const {
    data: user
  } = await axios.get("http://localhost:4000/users/logout", {
    headers: {
      "x-auth-token": token
    },
  });
  dispatch({
    type: "LOGOUT_USER",
    payload: user,
  });
};

export const updateUser = (values, token) => async (dispatch) => {
  console.log(values)
  console.log(token)
  const  { data : user } = await axios.patch("http://localhost:4000/users/me", values, {
    headers: {
      "x-auth-token": token
    },
  });
  console.log(user)
  dispatch({
    type: "UPDATE_USER",
    payload: user,
  });
};
export const addTask = (text, token) => async (dispatch) => {
  const obj = {
    description: text
  };
  const {
    data: newTask
  } = await axios.post(
    "http://localhost:4000/tasks",
    obj, {
      headers: {
        "x-auth-token": token
      },
    }
  );
  dispatch({
    type: "ADD_TASK",
    payload: newTask,
  });
};

export const getTasks = (token) => async (dispatch) => {
  const {
    data: tasks
  } = await axios.get("http://localhost:4000/tasks", {
    headers: {
      "x-auth-token": token
    },
  });
  dispatch({
    type: "GET_TASKS",
    payload: tasks,
  });
};

export const updateTask = (task, token) => async (dispatch) => {
  await axios.put("http://localhost:4000/tasks/" + task._id, task, {
    headers: {
      "x-auth-token": token
    },
  });
  dispatch({
    type: "UPDATE_TASKS",
    payload: task,
  });
};


export const removeTask = (taskId, token) => async (dispatch) => {
  console.log(taskId)
  const {
    data: tasks
  } = await axios.delete("http://localhost:4000/tasks/" + taskId, {
    headers: {
      "x-auth-token": token
    },
  });
  dispatch({
    type: "REMOVE_TASK",
    payload: tasks,
  });
};

export const addProfileImg = (data , token) => async (dispatch) => {
  console.log(data)
  const {data : newPhoto} = await axios.put("http://localhost:4000/users/me/profileImg", data , {
    headers: {
      "x-auth-token": token,
      'Content-Type': 'multipart/form-data'
    }
  });
  console.log(newPhoto)
  dispatch({
    type: 'ADD_PHOTO',
    payload : newPhoto
  });
  return newPhoto
};

export const getUser = (token) => async (dispatch) => {
  const {
    data: user
  } = await axios.get("http://localhost:4000/users/me", {
    headers: {
      "x-auth-token": token
    },
  });
  console.log(user)
  dispatch({
    type: "GET_USER",
    payload: user,
  });
  return user;
};