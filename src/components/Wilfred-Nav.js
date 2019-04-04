import React from 'react'
import {NavLink } from 'react-router-dom' 

//MY CUSTOM MENU
const Menu = (props) => {
    return(<div id="wrapper">
    <nav className="navbar-nav navbar-dark">
    <ul className="navbar navbar-expand navbar-nav navbar-dark bg-dark">
    <NavLink className="navbar-brand bg-dark text-light pl-3" to="/">{props.title}</NavLink>
        <li className="nav-item ml-3"><NavLink to="/" activeClassName="is-active" exact={true} className="nav-link">Home</NavLink></li>
        <li className="nav-item ml-3"><NavLink to="/create" activeClassName="is-active" className="nav-link">Add Expense</NavLink></li>
        <li className="nav-item ml-3"><NavLink to="/help" activeClassName="is-active" className="nav-link">Help</NavLink></li>
    </ul>
    </nav>
</div>)
}
//to have default props. this is an object
Menu.defaultProps = {
title:'Expensify'
}

export {Menu}

