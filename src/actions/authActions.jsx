import axios from 'axios';
import {  toast } from 'react-toastify';
import { initialState } from '../reducers/authReducer';


export const login = (dispatch , payload) => {

    dispatch({type: 'REQUEST_LOGIN'});

     axios.post(
        `${process.env.REACT_APP_HEROKU_URL}/signin`,
        {},
        {
            headers: {
                'Authorization': `Basic ${payload}`
            }
            
        }
        
    ).then( ( res ) => {
        dispatch({type: "LOGIN_SUCCESS", payload: res.data})
  
       
          
          /*   setUser(res.data.user);
            cookies.save( 'token', res.data.token );
            cookies.save( 'username', res.data.user.username );
            cookies.save( 'user_id', res.data.user.id );
            cookies.save( 'role', res.data.user.role );
            window.location.href = "/posts"; */
        
        
    } ).catch( ( err ) => {
      toast.error(' Invalid Login ', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        // font color
        style: {
          color: "#000000",
          fontSize: "20px",
          fontWeight: "bold",
        },
        });
        
    }
    );

}