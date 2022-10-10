import { createContext, useContext } from "react";
import axios from "axios";
import base64 from "base-64";
import cookies from "react-cookies";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";

const doContext = createContext();

const SigninProvider = ( props ) => {

    const [ isAuth , setIsAuth ] = useState( false );
    const [ signup , setSignup ] = useState( false );

    var user = {
        username: cookies.load( "username" ),
        user_id: cookies.load ("user_id"),
        role: cookies.load ("role")
}

const clearUser = () => {
    cookies.remove( "username" );
    cookies.remove( "user_id" );
    cookies.remove( "role" );
    setIsAuth( false );
}



const handleSignUp = async ( e ) => {
    e.preventDefault();
        if ( e.target.password.value !== e.target.confirmPassword.value ) {
            const notify = () => toast("Passwords do not match");

            notify();            return;
        } else {
            const userObject = {
                'username': e.target.username.value,
                'password': e.target.password.value,
                'email': e.target.email.value,
                'role': e.target.role.value
            };
            await axios.post(
                `${process.env.REACT_APP_HEROKU_URL}/signup`,
                userObject
            ).then( ( res ) => {
                if ( res.status === 200 ) {
                    cookies.save( 'token', res.data.token );
                    cookies.save( 'username', res.data.user.username );
                    cookies.save( 'user_id', res.data.user.id );
                    cookies.save( 'role', res.data.user.role );
                    setIsAuth( true );
                }
            } ).catch( ( err ) => {
                const notify = () => toast("Username or email already exists");

                notify();
            } );
        };
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
            setIsAuth( true );
        }
    } ).catch( ( err ) => {
        const notify = () => toast("Invalid Login");

        notify();
    }
    );
};


const handleSubmit = async ( e ) => {
    e.preventDefault();
    
    const post = {
        'title': e.target.title.value,
        'content': e.target.content.value,
        'img': e.target.img.value,
        'userID': cookies.load( 'user_id' ),
    };
    await axios.post(
        `${process.env.REACT_APP_HEROKU_URL}/post`,
        post, {
            headers: {
                'Authorization': `bearer ${cookies.load('token')}`
            }
        }
    ).then( () => {
        props.getData();
    } );
};




const value = { user, handleSignIn, clearUser, handleSignUp, handleSubmit, isAuth, signup, setSignup };

return (
    <doContext.Provider value={ value }>
        { props.children }
    </doContext.Provider>
)
}

export default SigninProvider;
