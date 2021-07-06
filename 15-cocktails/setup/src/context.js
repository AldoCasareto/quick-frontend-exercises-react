import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { useCallback } from 'react';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('a');
  const [cocktails, setCocktails] = useState([]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${url}${searchTerm}`);
      const data = res.data.drinks;
      if (res.data) {
        const newDrinks = data.map((item) => {
          const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } =
            item;
          return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            alc: strAlcoholic,
            glass: strGlass,
          };
        });
        setCocktails(newDrinks);
      } else {
        setCocktails([]);
      }
      setLoading(false);
     
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [searchTerm]);

  return (
    <AppContext.Provider
      value={{ loading, cocktails, searchTerm, setSearchTerm }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };

// const AppContext = React.createContext()

// const AppProvider = ({children})=>{
//   return <AppContext.Provider>{children}</AppContext.Provider>
// }

// export const useGlobalContext = () => {
//   return useContext(AppContext)
// }

// export {AppContext, AppProvider}
