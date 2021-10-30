import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../Hooks/UseAuth/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const {user, isLoading}=useAuth();
    if(isLoading){
        return <div class="spinner-border text-danger text-center " role="status">
        <span class="visually-hidden ">Loading...</span>
      </div>
    }
    return (
        <div>
            <Route
      {...rest}
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
        </div>
    );
};

export default PrivateRoute;