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
  })
  }

  return (
    <div className="login">
      <button className=" btn btn-primary px-5" onClick={handleGoogleLogin}>
        Sign is google
      </button>
    </div>
  );
};

export default Login;
