'use static';

import React from 'react';

const LoginContext = React.createContext();

const LoginProvider = ({ children }) => {
    //make a state to store the user's login information
    const [login, setLogin] = React.useState({
        username: '',
        password: ''
    });

    //make a function to update the user's login information
    const updateLogin = (e) => {
        //get the name and value of the input
        const { name, value } = e.target;

        //update the user's login information
        setLogin({
            ...login,
            [name]: value
        });
    };

    //return the login context provider
    return (
        <LoginContext.Provider value={{ login, updateLogin }}>
            {children}
        </LoginContext.Provider>
    );
}

//exporting
export { LoginContext, LoginProvider };


