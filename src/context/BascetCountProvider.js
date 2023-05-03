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

export const InitBascetCount = () => {
  const [data, setData] = useState(null);
  const [loading, setloading] = useState(true);
  const { bascetCount, setBascetCount } = useBascetCount();


  const getCount = () => {
    return data?.data.reduce((total, books) => {
      return total + books?.quantity
    }, 0)
  }
  const getData = async () => {
    setloading(true);
    try {
      const response = await BasketController.getAll();
      const data = response.data;
      setData(data);
      setloading(false);
    } catch (error) {
      console.error(error);
      setloading(false);
    }
  }
  useEffect(() => {
    const a = getData();
    setBascetCount(a);
    setloading(false);
  }, []);



}

export { useBascetCount, BascetCountProvider };