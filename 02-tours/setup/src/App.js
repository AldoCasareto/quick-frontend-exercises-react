import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Tours from './Tours';
import axios from 'axios';

const url = 'https://course-api.com/react-tours-project';

function App() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const res = await axios.get(url);
      console.log(res.data);
      setTours(res.data);
      setLoading(false);
    } catch (error) {
      setLoading(true);
    }
  };

  const handleDelete = (id) => {
    const filterDelete = tours.filter((tour) => tour.id !== id);
    setTours(filterDelete);
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return (
    <>
      <h1>Tours</h1>
      {tours.length === 0 ? (
        <h2>No tours left</h2>
      ) : (
        <h2>Tours available {tours.length} </h2>
      )}

      {loading ? (
        <Loading />
      ) : (
        <Tours tours={tours} handleDelete={handleDelete} />
      )}
    </>
  );
}

export default App;
