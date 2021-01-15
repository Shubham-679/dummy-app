import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const Profile = ({users}) => {
    return ( 
        <div className="container mt-5">
            { !users.user && (
                <React.Fragment>
                    <Redirect to="/not-found"/>
                </React.Fragment>)}

            { users.user && (
            <React.Fragment>   
                <div className="row justify-content-md-left">
                    <div class="col-md-auto">
                        <h3> Name : { users.user.name} </h3>
                    </div>
                </div>
                <div className="row justify-content-md-left">
                    <div class="col-md-auto">
                    
                        <h3> Email : { users.user.email} </h3>
                    
                    </div>
                </div> 
                <div className="row justify-content-md-left">
                    <div class="col-md-auto">
                        <h3> Age : { users.user.age} </h3>
                    </div>
                </div> 
            </React.Fragment>)}
        </div>
     );
}

const mapStateToProps = (state) => ({
    users : state.users
  })

export default connect(mapStateToProps)(Profile);