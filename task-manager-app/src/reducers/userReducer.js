const userReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_USER":
      return (state = action.payload);

    case "FIND_USER":
      return (state = action.payload);

    case "LOGOUT_USER":
      return (state = []);

    default:
      return state;
  }
};

export default userReducer;
