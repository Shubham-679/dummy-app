import React, { useEffect} from 'react';

const Logout = () => {
    useEffect(()=>{
        localStorage.clear('x-auth-token')
        window.location = "/"
    },[])
    return ( 
       null
     );
}
 
export default Logout;