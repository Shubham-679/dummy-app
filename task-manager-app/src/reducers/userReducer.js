
const userReducer = (state = [], action) => {
    switch (action.type) {
      case "ADD_USER":
        return [
            ...state,
            {
                user  : action.values
            }
        ]  
        case "CHECK_USER":
            console.log(action.values)
            return    
      default:
        return state;
    }
  };
  export default userReducer;