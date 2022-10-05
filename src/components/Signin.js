
import React, { useContext } from 'react'
import { authContext } from '../Context/AuthContext';
import "../App.css";



function Signin() {


    const { handleSignIn } = useContext(authContext);
    return ( 

        <div className="container">
            <div class="ocean">
            <div class="wave"></div>
            </div>
            <form className="cool" onSubmit={ handleSignIn }>
                <div className="form-group">
                    <h1 className="form-header">Sign in form</h1>
                    <label htmlFor="username">Username</label>
                    <input type="text" className="form-control" id="username" name="username" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password" name="password" />
                </div>
                
                <p>Don't have an account? <a href="/signup" className="href">Sign up now</a></p>
                
                    <button className="form-button">Submit</button>
               
            </form>
                
            </div>
           
    );

}

export default Signin;