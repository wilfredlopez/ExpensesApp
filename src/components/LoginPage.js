import React from 'react'
import {connect} from 'react-redux'
import {startLogin} from './../actions/auth'



export const LoginPage = ({startLogin}) => {
    return (
        <div className="container">
        <div className="row">
        <div className="col-12 col-sm-8 offset-sm-2">
        <h1 className="display-2">Expense App</h1>
        <p>Welcome! Please Log in with your existing google account.</p>
        <div>
            <button type="submit" className="btn btn-primary btn-lg" onClick={startLogin}>Login with Google</button>
        </div>
        </div>
        </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
})

export default connect(undefined, mapDispatchToProps)(LoginPage)