/* import axios from "axios";
import cookies from "react-cookies"; */
//import Footer from "./Footer";
import React, { useContext } from "react";
import "../App.css";
import { authContext } from "../Context/AuthContext";
import { FormControl, FormLabel, Input, Button } from "@chakra-ui/react";

function Signup() {
  const { handleSignUp, setSignup } = useContext(authContext);
  return (
    <div className="container">
      <div class="ocean">
        <div class="wave"></div>
      </div>
      <div className="signup">
        <h1 className="form-header">Sign up</h1>
        <FormControl onSubmit={handleSignUp}>
          <div className="left">
            <div className="form-group">
              <FormLabel htmlFor="username">Username</FormLabel>
              <Input type="text" name="username" id="username" />

              <FormLabel htmlFor="password">Password</FormLabel>
              <Input type="text" name="password" id="password" />
            </div>
          </div>

          <div className="right">
            <div className="form-group">
              <FormLabel htmlFor="confirmPassword">Confirm Password</FormLabel>
              <Input type="text" name="confirmPassword" id="confirmPassword" />

              <FormLabel htmlFor="email">Email</FormLabel>
              <Input type="email" name="email" id="email" />
            </div>
          </div>
          <div className="form-group-role">
            <select className="selecto" name="role">
              <option value="user">USER</option>
              <option value="admin">ADMIN</option>
            </select>
          </div>
          <Button> Submit</Button>

          <p>
            Already have an account?{" "}
            <a href="/signin" onClick={setSignup} className="href">
              Sign in now
            </a>
          </p>
        </FormControl>
      </div>
      {/* <Footer/>
       */}{" "}
    </div>
  );
}

export default Signup;
