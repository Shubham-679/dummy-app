const userReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_USER":
      return (state = action.payload);

    case "FIND_USER":
      return state = action.payload;

    case "LOGOUT_USER":
      return (state = {});

    case "UPDATE_USER":
      return {
        token : state.token,
        user : {
          name : action.payload.name,
          email : action.payload.email,
          age : action.payload.age
        },
      }
      case "ADD_PHOTO":
        return state = {
          img : action.payload,
          ...state         
        }
        case "GET_USER":
        return {
          token : state.token,
          user : action.payload
        }

    default:
      return state;
  }
};

export default userReducer;
