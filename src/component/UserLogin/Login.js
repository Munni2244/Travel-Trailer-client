import React from 'react';
import useAuth from '../Hooks/UseAuth/useAuth';
import  './Login.css'

const Login = () => {
const {SignWithGoogle}= useAuth();
    return (
      <div className="d-flex justify-content-center align-items-center  ">
            <div className="text-center mt-5 login-box ">
            <button onClick={SignWithGoogle} >Sign In Google</button>
        </div>
      </div>
    );
};

export default Login;