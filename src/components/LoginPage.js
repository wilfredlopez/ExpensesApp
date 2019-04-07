import React from 'react'
import {connect} from 'react-redux'
import {startLogin} from './../actions/auth'



export const LoginPage = ({startLogin}) => {
    return (
        <div className="login">
        <div className="row login__box">
        <div className="col-12">
        <h1 className="display-2">Expenses</h1>
        <p>Keep track of your expenses.</p>
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