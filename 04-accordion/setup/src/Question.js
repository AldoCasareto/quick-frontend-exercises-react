import React, { useState } from 'react';
import { BiMinus, BiPlus } from 'react-icons/bi';
const Question = ({ title, info }) => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <>
      <article className='question'>
        <h3>{title}</h3>
        <button className='btn' onClick={handleShow}>
          {show ? <BiMinus /> : <BiPlus />}
        </button>
        {show && <h4>{info}</h4>}
      </article>
    </>
  );
};

export default Question;
