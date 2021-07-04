import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  const { job, image, text, name } = people[index];

  const checkIndex = (number) => {
    if (number > people.length - 1) return 0;
    if (number < 0) return people.length - 1;
    return number;
  };

  // if (index < 0) {
  //   return setIndex(people.length - 1);
  // }

  const handleLeft = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkIndex(newIndex);
    });
  };

  const handleRight = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkIndex(newIndex);
    });
  };

  const randomNumber = () => {
    let newIndex = Math.floor(Math.random() * people.length);
    setIndex(newIndex);
  };

  return (
    <>
      <h1>reviews</h1>
      <div className='review'>
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <h4>{job}</h4>
        <h5>{text}</h5>
      </div>
      <button>
        <FaChevronLeft onClick={handleLeft} />
      </button>
      <button onClick={randomNumber}>Random</button>
      <button>
        <FaChevronRight onClick={handleRight} />
      </button>
    </>
  );
};

export default Review;
