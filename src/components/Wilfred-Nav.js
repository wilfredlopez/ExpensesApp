import React from 'react'
import {NavLink } from 'react-router-dom' 
import {signOut} from './../actions/auth'
import { connect } from 'react-redux';

//MY CUSTOM MENU
export const Menu = (props) => {
    return(<div id="wrapper">
    <nav className="navbar-nav navbar-dark">
    <ul className="navbar navbar-expand navbar-nav navbar-dark bg-dark">
    <NavLink className="navbar-brand bg-dark text-light pl-3" to="/dashboard">{props.title}</NavLink>
        <li className="nav-item ml-3"><NavLink to="/dashboard" activeClassName="is-active" exact={true} className="nav-link">Dashboard</NavLink></li>
        <li className="nav-item ml-3"><NavLink to="/create" activeClassName="is-active" className="nav-link">Add Expense</NavLink></li>
       

        <div>{props.isAuthenticated &&  <button className="btn btn-danger ml-4"
        onClick={props.signOut}>Logout</button>}</div>
    </ul>
    
    </nav>
</div>)
}
//to have default props. this is an object
Menu.defaultProps = {
title:'Expense App'
}

//export {Menu}

const mapDispatchToProps = (dispatch)=> ({
    signOut: ()=> dispatch(signOut())
})

const mapStateToProps = (state) => {
    return {
        isAuthenticated: !!state.auth.uid
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu)
