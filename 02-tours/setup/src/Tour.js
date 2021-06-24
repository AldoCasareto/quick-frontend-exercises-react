import React, { useState } from 'react';

const Tour = ({ image, info, id, name, handleDelete }) => {
  return (
    <>
      <h2>{name}</h2>
      <img src={image} alt='{name}' />
      <p>{info}</p>
      <button onClick={() => handleDelete(id)}>Delete</button>
    </>
  );
};

export default Tour;
