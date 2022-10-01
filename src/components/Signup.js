import axios from "axios";
import cookies from "react-cookies";

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
            };
            await axios.post(
                `https://whiteboarding-backend-401.herokuapp.com/signup`,
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
            <h1 className="form-header2">Sign up</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="text" name="password" id="password" />
                </div>
                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="text" name="confirmPassword" id="confirmPassword" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" />
                </div>
                <div className="form-group">
                    <label htmlFor="role">Role</label>
                    <label class="form-control">
                    <input type="checkbox" name="checkbox" />
                    User
                    </label>
                    <label class="form-control2">
                    <input type="checkbox" name="checkbox" />
                    Admin
                    </label>
                    
                </div>
                <div className="form-group">
                    <input type="submit" />
                </div>
            </form>
            <p>You already have an account? <a href="/signin" className="href">Sign in now</a></p>
        </div>
        </div>
    );
}

export default Signup;




