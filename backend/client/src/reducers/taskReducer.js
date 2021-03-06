

const taskReducer = (state = [], action) => {
    switch (action.type) {
      case "ADD_TASK":
        return [...state, action.payload];

      case "GET_TASKS":
        return state = action.payload;

        case "UPDATE_TASKS":
          return state.map(a =>(a._id === action.payload._id) ? { ...a, description : action.payload.description} : a)
          
          case "REMOVE_TASK":
            return state.filter((a) => a._id !== action.payload._id)
                
            case "TOGGLE_TASK":
                return state.map(task =>
                    (task.id === action._id) 
                    ? { ...task, completed : !task.completed} : task
                )  
      
            default:
        return state;
    }
  };
  export default taskReducer;