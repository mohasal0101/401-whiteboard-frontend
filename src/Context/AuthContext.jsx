import axios from "axios";
import { createContext, useState, useContext } from "react";
import base64 from 'base-64';
import cookies from 'react-cookies';
import {  toast } from 'react-toastify';
export const authContext = createContext();
export const useAuth = () => useContext( authContext );



const AuthContextProvider = (props) => {

  const [isAuth, setisAuth] = useState(false);
  const [role, setRole] = useState('');
  const [user, setUser] = useState({});
  const [capabilities, setCapabilities] = useState();

  const handleSignUp = async ( e ) => {
    e.preventDefault();
    if ( e.target.password.value !== e.target.confirmPassword.value ) {
      alert( 'Passwords do not match' );
      return;
  } else {
      const userObject = {
          'username': e.target.username.value,
          'password': e.target.password.value,
          'email': e.target.email.value,
          'role': e.target.role.value
      };
      await axios.post(
          `https://whiteboarding-backend-401.herokuapp.com/signup`,
          userObject
      ).then( ( res ) => {
          if ( res.status === 200 ) {
              cookies.save( 'token', res.data.token );
              cookies.save( 'username', res.data.user.username );
              cookies.save( 'user_id', res.data.user.id );
              cookies.save( 'role', res.data.user.role );
              window.location.href = "/posts";
          }
      } ).catch( ( err ) => {
          alert( 'Username or email already exists' );
      } );
  };
};

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
          
            setUser(res.data.user);
            cookies.save( 'token', res.data.token );
            cookies.save( 'username', res.data.user.username );
            cookies.save( 'user_id', res.data.user.id );
            cookies.save( 'role', res.data.user.role );
            window.location.href = "/posts";
        }
        
    } ).catch( ( err ) => {
      toast.error(' Invalid Login ', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
        
    }
    );
  }


  const checkToken = () => {
    const token = cookies.load('token');
    const role = cookies.load('role');
    if (token) {
      setisAuth(true)
      setRole(role)
      setCapabilities(cookies.load('capabilities'))
    }
  }

 
// canDo a function that check user if they can do (read, add , update , delete)

const canDo = ( action ) => {
  if ( user.role === "admin" ) {
      return true;
  } else {
      return user.capabilities.includes( action );
  }
}

// login

const login = async ( username, password ) => {
  const encoded = base64.encode( `${username}:${password}` );
  const response = await axios.post(
      `${process.env.REACT_APP_HEROKU_URL}/signin`,
      {},
      {
          headers: {
              'Authorization': `Basic ${encoded}`
          }
      }
  );
  validateLogin( response.data );
  return response.data;
}

// validateLogin

const validateLogin = ( data ) => {
  cookies.save( 'token', data.token );
  cookies.save( 'username', data.user.username );
  cookies.save( 'user_id', data.user.id );
  cookies.save( 'role', data.user.role );
  cookies.save( 'capabilities', data.user.capabilities );
  window.location.href = "/posts";
}

//logout

const logout = () => {
  cookies.remove( 'token' );
  cookies.remove( 'username' );
  cookies.remove( 'user_id' );
  cookies.remove( 'role' );
  cookies.remove( 'capabilities' );
  window.location.href = "/posts";
}



  const value = {isAuth, setisAuth, handleSignIn, handleSignUp, checkToken, role, user, capabilities, canDo, login, logout};

  return (
    <authContext.Provider value={value}>
      { props.children }
    </authContext.Provider>
  )
}

export default AuthContextProvider