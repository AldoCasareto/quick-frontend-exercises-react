import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <section className='error-page section'>
      <div className='error-container'>
        <h1 className='section-title'>Wrong page!</h1>
        <p>sorry, this page does not contain any alcohol</p>
        <Link className='btn btn-primary' to='/'>
          Home
        </Link>
      </div>
    </section>
  );
};

export default Error;
