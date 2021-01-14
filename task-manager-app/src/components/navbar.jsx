import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom'

class Navbar extends Component {
    state = {}
    render() {
        return (
            <div className="container mt-3">
                <nav className="navbar navbar-expand-sm navbar-dark bg-primary" >
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/home">Home</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <NavLink className="nav-link" to="/login">Login</NavLink>
                                <NavLink className="nav-link" to="/signup">SignUp</NavLink>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;