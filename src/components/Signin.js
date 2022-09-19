import axios from "axios";
import base64 from "base-64";
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
                localStorage.setItem('token', true);
                window.location.href = '/posts';
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
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" className="form-control" id="username" name="username" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password" name="password" />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" id="email" name="email" />
                </div>
                <p>Don't have an account? <a href="/signup">Sign up now</a></p>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
                
            </div>
           
    );

}

export default Signin;