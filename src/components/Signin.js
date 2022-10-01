import axios from "axios";
import base64 from "base-64";
import cookies from 'react-cookies';
import "../App.css";



function Signin() {
    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = {
            'username': e.target.username.value,
            'password': e.target.password.value,
        };
        const encoded = base64.encode(`${user.username}:${user.password}`);
        await axios.post(
            `https://whiteboarding-backend-401.herokuapp.com/signin`,
            {},
            {
                headers: {
                    'Authorization': `Basic ${encoded}`
                }
            }
        ).then ( (res) => {
            if (res.status === 200) {
                cookies.save('token', res.data.token);
                cookies.save('user_id', res.data.user.id);
                cookies.save('username', res.data.user.username);
                cookies.save('role', res.data.user.role);
                window.location.href = '/posts'
            }
        } ).catch( (err) => {
            alert('Invalid Login');
        }
        );
        
    };
    return ( 

        <div className="container">
            <div class="ocean">
            <div class="wave"></div>
            </div>
            <form className="cool" onSubmit={handleSubmit}>
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
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
                
            </div>
           
    );

}

export default Signin;