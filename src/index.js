import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Tab2 from './components/tab2';
import AuthContextProvider from './Context/AuthContext';


const root = ReactDOM.createRoot( document.getElementById( 'root' ) );
root.render(
  <AuthContextProvider>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Signin />} />
      <Route path='/signin' element={<Signin />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/tab2' element={<Tab2 />} />
      {localStorage.getItem('token') ? <Route  path='/post' element={<App />} /> : <Route  path='/post' element={<Signin />} />}
    </Routes>
  </BrowserRouter>
  </AuthContextProvider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();