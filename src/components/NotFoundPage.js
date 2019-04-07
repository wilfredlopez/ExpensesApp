import React from 'react'
import {Link } from 'react-router-dom' 

const NotFoundPage = () =>(
    <div className="container">
    <div className="row">
        <div className="col-12">
        <h1>PAGE NOT FOUND</h1>
        <Link to="/">Go Home</Link>
        </div>
    </div>
        
    </div>
)

export default NotFoundPage