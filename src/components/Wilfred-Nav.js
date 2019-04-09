import React from 'react'
import {NavLink } from 'react-router-dom' 
import {signOut} from './../actions/auth'
import { connect } from 'react-redux';

//MY CUSTOM MENU
export const Menu = (props) => {
    return(<div id="menu-wrapper">
    <nav className="navbar-nav navbar-dark">
    <ul className="navbar navbar-expand navbar-nav bg-expense">
    <NavLink className="navbar-brand bg-expense bg-expense__brand text-light pl-3" to="/dashboard">{props.title}</NavLink>
      

        <div>{props.isAuthenticated &&  <button className="btn btn-light ml-4"
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
