// create a navbar component 
import React from 'react';
import "./App.css";
import "./App.scss";


const NavBars = () => {
    return (
          <>
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
    </>
    )
}

export default NavBars
