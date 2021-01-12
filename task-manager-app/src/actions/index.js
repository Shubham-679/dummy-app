
export const addUser = (values) => {
    console.log(values)
    return {
        type : 'ADD_USER',
        values
    };
};

export const checkUser = (values) => {
    console.log("action")
    return{
        type : 'CHECK_USER',
        values  
    }
}