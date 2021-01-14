

const taskReducer = (state = [], action) => {
    switch (action.type) {
      case "ADD_TASK":
        return state = action.payload;

      case "GET_TASKS":
        return state = action.payload;

      default:
        return state;
    }
  };
  export default taskReducer;