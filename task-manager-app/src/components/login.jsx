import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { checkUser } from "../actions";

const initialValues = {
  email: "",
  password: ""
};

const Login = (props) => {
  
  const [values, setValues] = useState(initialValues);
  const dispatch = useDispatch();


  // const users = useSelector(state => state.users)
  // const userName = users.map(el => el.user.name).toString();


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    dispatch(checkUser(values))

    props.history.replace('/tasks')
    // props.history.push("/tasks")
  };

  return (
    <div className="container">
      <h1 className="m-4"> Login Here..</h1>
      <div className="d-flex justify-content-center">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label float-left">Email address</label>
            <input
              value={values.email}
              onChange={handleInputChange}
              name="email"
              type="email"
              placeholder="Enter Your Email"
              className="form-control"
            />
            <small id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label float-left">Password</label>
            <input
              value={values.password}
              onChange={handleInputChange}
              name="password"
              type="password"
              placeholder="Enter Your Password"
              className="form-control"/>
          </div>
          <div className="mb-3">
            <button type="submit" className="btn btn-primary">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
