import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

export class Homepage extends Component {
    render() {
        return (
            <div>
               
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <NavLink className="navbar-brand" to="/">Home Page</NavLink>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <NavLink className="nav-link" to="/Accordion"><b>Accordion</b></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/Counter"><b>Counter</b></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/Slider"><b>Image</b></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/List"><b>List</b></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/Search"><b>Search</b></NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Homepage;