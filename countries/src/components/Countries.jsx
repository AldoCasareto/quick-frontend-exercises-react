import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './countries.css';
import Filter from './Filter';
import ModalCard from './ModalCard';

const Countries = () => {
  const [list, setList] = useState([]);
  const [search, setSearch] = useState('');
  const [countryModal, setCountryModal] = useState({});
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const fetchData = async () => {
    const res = await axios.get('https://restcountries.eu/rest/v2/all');
    setList(res.data);
    console.log(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleFilter = (filter) => {
    setSearch(filter);
  };

  const findMatch = list.filter((country) =>
    country.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleClick = (alpha3Code) => {
    const countryDisplay = list.find(
      (country) => country.alpha3Code === alpha3Code
    );
    console.log(countryDisplay);
    setCountryModal(countryDisplay);
    setModalIsOpen(true);
  };

  return (
    <>
      <Filter handleFilter={handleFilter} />
      <div className='container'>
        {search
          ? findMatch.map((country) => {
              const { flag, name, alpha3Code } = country;
              return (
                <div
                  key={alpha3Code}
                  className='card'
                  onClick={() => handleClick(alpha3Code)}
                >
                  <img src={flag} alt={name} />
                  <p>{name}</p>
                </div>
              );
            })
          : 'Type to find a country'}
      </div>
      <ModalCard
        countryModal={countryModal}
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
      />
    </>
  );
};

export default Countries;
