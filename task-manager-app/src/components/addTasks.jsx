import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTask, getTasks, updateTask } from "../actions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
const Tasks = ({ users }) => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  // let token = localStorage.getItem("x-auth-token");
  //     if(token === null){
  //       localStorage.setItem("x-auth-token", "");
  //       token = "";
  //     }
  const token = users.token;
  useEffect(() => {
    dispatch(getTasks(token));
  }, [dispatch, token, users]);

  let input = React.createRef();
  const handleOnsubmit = (e) => {
    e.preventDefault();
    const task = input.current.value;
    dispatch(addTask(task, token));
  };

  let value;
  const handleChange = (e) => {
    value = e.target.value;
  };
  const handleUpdate = (task) => {
    task.description = value;
    dispatch(updateTask(task, token));
  };

  const handleRemove = (task) => {};

  return (
    <div className="container">
      {!token && (
        <React.Fragment>
          <Redirect to="/not-found" />
        </React.Fragment>
      )}

      {token && (
        <React.Fragment>
          <div className="m-5">
            <h1> Welcome {users.user.name}..! </h1>
            <h5> Now You Can Add Your Tasks... Here </h5>
          </div>
          <form onSubmit={handleOnsubmit}>
            <input
              type="text"
              id="add"
              ref={input}
              placeholder="Add New Task..."
              className="m-2"
            />
            <button className="btn btn-primary m-2">Add</button>
          </form>

          <div className="container col-10">
            <ul className="list-group">
              {tasks.map((task) => (
                <li
                  className="list-group-item"
                  key={task._id}
                  // onClick={() => toggleTask(task.id)}
                  style={{
                    textDecoration: task.completed ? "line-through" : "none",
                  }}
                >
                  {task.description}

                  <div>
                    <input
                      type="text"
                      id="update"
                      placeholder="Update..."
                      onChange={handleChange}
                      className="float-right m-2"
                    />
                    <button
                      className="btn btn-warning btn-sm float-right m-2"
                      onClick={() => handleUpdate(task)}
                    >
                      Update
                    </button>
                  </div>

                  <button
                    className="btn btn-danger btn-sm float-left m-2"
                    onClick={() => handleRemove(task)}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </React.Fragment>
      )}
    </div>
  );
};
const mapStateToProps = (state) => ({
  users: state.users,
});
export default connect(mapStateToProps)(Tasks);
