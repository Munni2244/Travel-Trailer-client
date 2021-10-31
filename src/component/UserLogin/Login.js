import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import useAuth from '../Hooks/UseAuth/useAuth';
import  './Login.css'

const Login = () => {
const {SignWithGoogle, setUser, setIsLoading}= useAuth();
const history=useHistory();
const location= useLocation();
const url= location.state?.from || "/home";

  const SignInGoogle=() =>{
    SignWithGoogle()
      .then(res => {
        setUser(res.user);
        history.push(url);
      }).catch(error => {
        console.log(error.message);
      })
      .finally(() => setIsLoading(false));

  }
    return (
      <div className="d-flex justify-content-center align-items-center  ">
            <div className="text-center mt-5 login-box ">
            <button onClick={SignInGoogle} ><i className="fab fa-google-plus-g text-primary"></i> Sign In Google</button>
        </div>
      </div>
    );
};

export default Login;