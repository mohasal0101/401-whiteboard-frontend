import { createContext, useContext } from "react";


import axios from "axios";
import base64 from "base-64";
import cookies from "react-cookies";

const doContext = createContext();

const SigninProvider = ( props ) => {

    var user = {
        username: cookies.load( "username" ),
        user_id: cookies.load ("user_id"),
        role: cookies.load ("role")
}

const clearUser = () => {
    cookies.remove( "username" );
    cookies.remove( "user_id" );
    cookies.remove( "role" );
}

const handleSignUp = async ( e ) => {
    e.preventDefault();
    const data = {
        userName: e.target.username.value,
        email: e.target.email.value,
        password: e.target.password.value
    };

    await axios.post( `${process.env.REACT_APP_HEROKU_URL}/signup`, data ).then( res => {
        console.log( res );
    } ).catch( e => console.log( e ) )
}



const handleSignIn = async ( e ) => {
    e.preventDefault();
    const userInput = {
        'username': e.target.username.value,
        'password': e.target.password.value,
    };
    const encoded = base64.encode( `${userInput.username}:${userInput.password}` );
    await axios.post(
        `${process.env.REACT_APP_HEROKU_URL}/signin`,
        {},
        {
            headers: {
                'Authorization': `Basic ${encoded}`
            }
        }
    ).then( ( res ) => {
        if ( res.status === 200 ) {
            cookies.save( 'token', res.data.token );
            cookies.save( 'username', res.data.user.username );
            cookies.save( 'user_id', res.data.user.id );
            cookies.save( 'role', res.data.user.role );
            window.location.href = "/posts";
        }
    } ).catch( ( err ) => {
        alert( 'Invalid Login' );
    }
    );
};



const value = { user, handleSignIn, clearUser, handleSignUp };

return (
    <doContext.Provider value={ value }>
        { props.children }
    </doContext.Provider>
)
}

export default SigninProvider;
