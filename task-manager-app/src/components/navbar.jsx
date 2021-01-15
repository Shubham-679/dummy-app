import React, {  } from 'react';
import { NavLink, Link } from 'react-router-dom'
import { connect } from 'react-redux';

const Navbar = ({users}) => {
    console.log(users.user)
   
        return (
            <div className="container mt-3">
                <nav className="navbar navbar-expand-sm navbar-dark bg-primary" >
                    <div className="container-fluid">
                        
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">


                               { !users.user && (
                                   <React.Fragment>
                                <Link className="navbar-brand" to="/home">Home</Link>
                                <NavLink className="nav-link" to="/login">Login</NavLink>
                                <NavLink className="nav-link" to="/signup">SignUp</NavLink>
                                </React.Fragment>)
                                }

                                 { users.user && (
                                   <React.Fragment>
                                <NavLink className="navbar-brand" to="/tasks">Home</NavLink>
                               <NavLink className="nav-link" to="/logout">Logout</NavLink>
                                <NavLink className="nav-link" to="/profile">Profile</NavLink>
                                </React.Fragment>)
                                }
                                
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
    const mapStateToProps = (state) => ({
        users : state.users
      })

export default connect(mapStateToProps) (Navbar);