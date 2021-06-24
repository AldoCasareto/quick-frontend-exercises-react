import React from 'react';
import Tour from './Tour';
const Tours = ({ tours, handleDelete }) => {
  return (
    <>
      {tours.map((tour) => (
        <Tour key={tour.id} {...tour} handleDelete={handleDelete} />
      ))}
    </>
  );
};

export default Tours;
