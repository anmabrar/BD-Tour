import React from "react";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../../Hook/useAuth";
import './Login.css'

const Login = () => {
  const {signInWithGoogle } = useAuth();

  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || '/home';


  const handleGoogleLogin =()=>{
    signInWithGoogle()
    .then(result => {
      history.push(redirect_uri);
      sessionStorage.setItem("email",result.user.email);
  })
  }

  return (
    <div className="login">
      <button className=" btn btn-outline-secondary px-5" onClick={handleGoogleLogin}>
      <img alt="" src="https://img.icons8.com/color/48/000000/google-logo.png"/>
        <span className="mx-3">Sign is google</span>
      </button>
    </div>
  );
};

export default Login;
