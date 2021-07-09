import React from 'react';

const Filter = ({ handleFilter }) => {
  return (
    <div className='input-search'>
      <label>Find a country</label>
      <input type='text' onChange={(e)=>handleFilter(e.target.value)} />
    </div>
  );
};

export default Filter;
