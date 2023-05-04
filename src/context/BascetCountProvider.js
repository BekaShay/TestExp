import React, { createContext, useContext, useEffect, useState } from 'react';
import { BasketController } from '../api/controllers/API_Controllers';


const BascetContex = createContext({});

const useBascetCount = () => {
  const value = useContext(BascetContex);
  return value;
};

const BascetCountProvider = ({ children }) => {
  const [bascetCount, setBascetCount] = useState(0);

  return (
    <BascetContex.Provider value={{ bascetCount, setBascetCount }}>
      {children}
    </BascetContex.Provider>
  );
};



export { useBascetCount, BascetCountProvider };