import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import AuthContextProvider from "./Context/AuthContext";
import SigninProvider from "./Context/LoginContext";
import cookies from "react-cookies";
import { Provider } from 'react-redux';
import store from './redux/store';
import "./App.css";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContextProvider>
    <SigninProvider>
      <BrowserRouter>
        <ChakraProvider>
          <Provider store={store}>
          <Routes>
            <Route path="/" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            {cookies.load("token") ? (
              <Route path="/posts" element={<App />} />
            ) : (
              <Route path="/posts" element={<Signin />} />
            )}
          </Routes>
          </Provider>
        </ChakraProvider>
      </BrowserRouter>
    </SigninProvider>
  </AuthContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
