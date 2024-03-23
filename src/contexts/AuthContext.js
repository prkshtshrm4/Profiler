import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';



export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [newUser, setNewUser] = useState(false);
  const [initializing, setInitializing] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const [splashLoading, setSplashLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const listener = null;
    return listener;
  }, []);

  const onAuthStateChanged = async (user) => {
    setInitializing(true);
    // const fullName = await AsyncStorage.getItem('fullName');
    //
    setAuthenticated(true)
  

    if (initializing) setInitializing(false);
    setTimeout(async () => {
      setSplashLoading(false);
    }, 2000);
  };


  const handleOnSignup = async () => {
              setAuthenticated(true);
              setNewUser(false);
              setLoading(false);
  };

  const signUp = async (name, phoneNumber, email) => {
    setLoading(true);
    

      // handleOnSignup(name, phoneNumber, countryCode, email);
    }

  const signOutAfterConfirmation = async () => {
    //SIGN OUT
   
  };

  const logOut = async () => {
    //LOG OUT
    //
    setAuthenticated(false);
    setUser({});
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        authenticated,
        splashLoading,
        error,
        initializing,
        signUp,
        signOutAfterConfirmation,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
