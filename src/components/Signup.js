/* import axios from "axios";
import cookies from "react-cookies"; */
//import Footer from "./Footer";
import React, { useContext } from 'react'
import { authContext } from '../Context/AuthContext';



function Signup () {
    
        const{ handleSignUp } = useContext(authContext);
    return (
        <div className="container">
            <div class="ocean">
            <div class="wave"></div>
            </div>
        <div className="signup">
            <h1 className="form-header">Sign up</h1>
            <form onSubmit={ handleSignUp }>
                <div className="left">
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username" />
                
                

                    <label htmlFor="password">Password</label>
                    <input type="text" name="password" id="password" />
                </div>
                </div>

                <div className="right">
                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="text" name="confirmPassword" id="confirmPassword" />
                
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" />
                </div>
                </div>
                <div className="form-group-role">
                    <select name="role">
                        <option value="user" >USER</option>
                        <option value="admin" >ADMIN</option>
                    </select>
                </div>
                <button className="form-button">Submit</button>

                <p>Already have an account? <a href="/signin" className="href">Sign in now</a></p>
                </form>
        </div>
{/* <Footer/>
 */}        </div>
        
    );
}

export default Signup;