import React, { useState, useEffect } from 'react';
import Loading from '../components/Loading';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const SingleCocktail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [cocktail, setCocktail] = useState(null);

  const fetchCocktail = async () => {
    const res = await axios.get(`${url}${id}`);
    console.log(res.data.drinks);
    setCocktail(res.data.drinks);
  };

  useEffect(() => {
    setLoading(true);
    fetchCocktail();
  }, [id]);

  return (
    <div>
      {/* <h2><img src={res.data.strDrinkThumb} alt="" /></h2> */}
    </div>
  );
};

export default SingleCocktail;
