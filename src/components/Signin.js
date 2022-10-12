
import React, { useContext } from 'react'
import { authContext } from '../Context/AuthContext';
import "../App.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Signin() {

    const { notify } = useContext(authContext);
    const { handleLogin } = useContext(authContext);
    return ( 

        <div className="container">
            <div class="ocean">
            <div class="wave"></div>
            </div>
            <form className="cool" onSubmit={ handleLogin }>
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
                
                <div>
                <button className='form-button' onClick={notify}>Submit!</button>
                <ToastContainer />
                </div>               
            </form>
                
            </div>
           
    );

}


export default Signin;