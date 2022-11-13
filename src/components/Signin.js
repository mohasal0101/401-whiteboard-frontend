
import React, { useContext } from 'react'
import { authContext } from '../Context/AuthContext';
import "../App.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FormControl, FormLabel, Button } from "@chakra-ui/react";



function Signin() {

    const { notify } = useContext(authContext);
    const { handleLogin } = useContext(authContext);
    return ( 

        <div className="container">
            <div class="ocean">
            <div class="wave"></div>
            </div>
            <FormControl className="cool" onSubmit={ handleLogin }>
                <div className="form-group">
                    <h1 className="form-header">Sign in form</h1>
                    <FormLabel htmlFor="username">Username</FormLabel>
                    <input type="text" className="form-control" id="username" name="username" />
                </div>
                <div className="form-group">
                    <FormLabel htmlFor="password">Password</FormLabel>
                    <input type="password" className="form-control" id="password" name="password" />
                </div>
                
                <p>Don't have an account? <a href="/signup" className="href">Sign up now</a></p>
                
                <div>
                <Button  onClick={notify}>Submit!</Button>
                <ToastContainer />
                </div>               
            </FormControl>
                
            </div>
           
    );

}


export default Signin;