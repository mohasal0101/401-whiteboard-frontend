import Post from "./components/Post";
import AddPostForm from "./components/Add-post-form";
import React from 'react';
import { useEffect } from "react";
import { Else, If, Then, When } from "react-if";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import { useAuth } from "./Context/AuthContext";
import Navbar from "./navbarS";
import Theme from "./Chakra Theme/theme";


/* import NavBar from "./navbarS";
import Carousel from './components/Carousel';
import { useContext, useEffect, useState} from "react";
import { authContext } from "./Context/AuthContext"; */
/* import { Nav } from "react-bootstrap";
 */
/*  const [rerender, setRerender] = useState(false);
 const handleRerender = () => {
   setRerender(!rerender);
 }; */

 function App() {
  
  const {isAuth, signup, checkSignIn} = useAuth()
  useEffect( () => {
    checkSignIn();
  }, [] );

  
  return (
    <div className="App">
      <Theme />
      <Navbar />
      <When condition={isAuth}>
        <AddPostForm/>
        <Post/>
      </When>
      <When condition={!isAuth}>
        <If condition={signup}>
          <Then>
            <Signup/>
          </Then>
          <Else>
            <Signin/>
          </Else>
        </If>
      </When>
    </div>
  );
}

export default App;