import axios from "axios";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "../App.css";




function Signup() {
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (e.target.password.value !== e.target.confirmPassword.value) {
            alert('Passwords do not match');
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
        ).then( (res) => {
            if (res.status === 200) {
                localStorage.setItem('token', true);
                window.location.href = '/posts';
            } 
          }).catch( (err) => {
            alert('Username or email already exists'); 
        } );
    };
    };
    return (
        <Container>
        <div className="container">
        <Form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" className="form-control" id="username" name="username" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" id="email" name="email" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password" name="password" />
                </div>
                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="password" className="form-control" id="confirmPassword" name="confirmPassword" />
                </div>
                
                <Button type="submit" className="btn btn-primary">Submit</Button>
                </Form>
        </div>
        </Container>
        
    );
}

export default Signup;