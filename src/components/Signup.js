import axios from "axios";
import cookies from "react-cookies";
import Footer from "./Footer";


function Signup () {
    const handleSubmit = async ( e ) => {
        e.preventDefault();
        if ( e.target.password.value !== e.target.confirmPassword.value ) {
            alert( 'Passwords do not match' );
            return;
        } else {
            const user = {
                'username': e.target.username.value,
                'password': e.target.password.value,
                'email': e.target.email.value,
                'role': e.target.role.value
            };
            await axios.post(
                `${process.env.REACT_APP_HEROKU_URL}/signup`,
                user
            ).then( ( res ) => {
                if ( res.status === 200 ) {
                    cookies.save( 'token', res.data.token );
                    cookies.save( 'user_id', res.data.user.id );
                    cookies.save( 'username', res.data.user.username );
                    cookies.save( 'role', res.data.user.role );
                    window.location.href = '/posts';
                }
            } ).catch( ( err ) => {
                alert( 'Username or email already exists' );
            } );
        };
    };
    return (
        <div className="container">
        <div className="signup">
            <h1 className="form-header">Sign up</h1>
            <form onSubmit={handleSubmit}>
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
                        <option value="user" selected>USER</option>
                        <option value="admin">ADMIN</option>
                    </select>
                </div>
                <div className="form-button2">
                <button type="submit">Submit</button>
                </div>
                <p>Already have an account? <a href="/signin" className="href">Sign in now</a></p>
                </form>
        </div>
<Footer/>
        </div>
        
    );
}

export default Signup;