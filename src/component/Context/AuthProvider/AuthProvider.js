import React from 'react';
import { createContext } from 'react';
import useFirebase from '../../Hooks/UseFirebase/useFirebase';

export const authContext = createContext();
const AuthProvider = ({children}) => {
    const AllContext =useFirebase();
    return (
        <authContext.Provider value={AllContext}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;
