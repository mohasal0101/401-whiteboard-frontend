import "./App.css";
import "./App.scss";
import Post from "./components/Post";
import AddPostForm from "./components/Add-post-form";
import { useContext, useEffect, useState} from "react";
import React from 'react';
import Carousel from './components/Carousel';
import { authContext } from "./Context/AuthContext";
import { Else, If, Then, When } from "react-if";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
/* import { Nav } from "react-bootstrap";
 */
function App() {
 /*  const [rerender, setRerender] = useState(false);
  const handleRerender = () => {
    setRerender(!rerender);
  }; */

  

  const { signup,user } = useContext(authContext);


  useEffect (() => {
   // checkToken()
  }, [])

  return (
   <>
  
    <div className="App">
      
    <header class="header">
  <div class="header__logo theGif">
    <p class="header__logo__text">JS</p>
  </div>
</header>
<section class="info">
  <div class="info__aside"><h2> </h2></div>
  <div class="info__content">
    <div class="info__content__text">
      <p>This is the place where I will share the insight I found most important from an exercise and <span>This Page is view only for users.</span>Only Admins who can Post, Edit, Delete. The Following posts</p>
      <h4>Enjoy scrolling <em>Devs!</em> <span>&mdash;&mdash;&mdash;&mdash;&mdash;</span></h4>
    </div>
    <div class="info__content__action"></div>
    <nav class="info__content__nav">
      <ul>
        <li class="info__content__nav__item"><a href="/posts">React JS CONTENT 01</a></li>
        <li class="info__content__nav__item"><a href="/tab2">React JS CONTENT 02</a></li>
        <li class="info__content__nav__item"><a href="tab3">React JS CONTENT 03</a></li>
       
      </ul>
    </nav>
  </div>
  </section>
          <Carousel />
          <AddPostForm getData={user.isAuth}/>
         <Post  />
    </div>
    </>
  );
}

export default App;