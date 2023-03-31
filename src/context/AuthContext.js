import React, {createContext, useContext, useEffect, useState} from 'react';
import {STORAGE} from '../../constants/storage';
import { getStorage } from '../storage/LocalStorage';


const AuthContext = createContext({});

const useAuth = () => {
  const value = useContext(AuthContext);
  return value;
};

const AuthProvider = ({children}) => {
  const [isAuth, setIsAuth] = useState(false);

  

  return (
    <AuthContext.Provider value={{isAuth, setIsAuth}}>
      {children}
    </AuthContext.Provider>
  );
};

export {useAuth, AuthProvider};