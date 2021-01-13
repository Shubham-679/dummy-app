
const userReducer = (state = [], action) => {
    switch (action.type) {
      case "ADD_USER":
        return state = action.payload

        case "CHECK_USER":
            return    
      default:
        return state;
    }
  };
  export default userReducer;