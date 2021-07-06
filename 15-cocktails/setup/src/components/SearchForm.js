import React from 'react';
import { useGlobalContext } from '../context';

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = React.useRef('');
  
  const handleSubmit =(e)=>{
    e.preventDefault();
  }

  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value);
  };
  return (
    <section className='section search'>
      <form onSubmit={handleSubmit} className='search-form'>
        <div className='form-control'>
          <label htmlFor='name'>search your favorite drink</label>
          <input
            autoFocus
            onChange={searchCocktail}
            type='text'
            id='name'
            ref={searchValue}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
