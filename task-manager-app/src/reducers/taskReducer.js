

const taskReducer = (state = [], action) => {
    switch (action.type) {
      case "ADD_TASK":
        return [...state, action.payload];

      case "GET_TASKS":
        return state = action.payload;

        case "UPDATE_TASKS":
          return state.map(a =>(a._id === action.payload._id) ? { ...a, description : action.payload.description} : a)

      default:
        return state;
    }
  };
  export default taskReducer;