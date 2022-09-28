import axios from "axios";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "../App.css";
import cookies from 'react-cookies';

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
        <Container>
        <div className="container">
        <Form onSubmit={handleSubmit}>
                <div className="form-group">
                <h1 className="form-header">Sign in form</h1>
                    <label htmlFor="username">Username</label>
                    <input type="text" className="form-control" id="username" name="username" />
                </div>
                
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password" name="password" />
                </div>
                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="password" className="form-control" id="confirmPassword" name="confirmPassword" />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" id="email" name="email" />
                </div>

                <div className="Role">
                    <label htmlFor="role">Role</label>
                    <input  type="checkbox" checked="checked" name="role" value="user"/> User 
                    <input  type="checkbox"  name="role" value="user"/> Admin 
                 </div>
                
                <Button type="submit" className="btn btn-primary">Submit</Button>
                </Form>
        </div>
        </Container>
        
    );
}

export default Signup;