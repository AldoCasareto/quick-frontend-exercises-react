import React from 'react';
import Modal from 'react-modal';

const ModalCard = ({ countryModal, modalIsOpen, setModalIsOpen }) => {
  const { name, capital, region, flag } = countryModal;
  console.log(capital, name, region, flag);
  return (
    <div>
      <Modal
        style={{
          overlay: {
            backgroundColor: 'grey',
          },
          content: {
            color: 'orange',
          },
        }}
        ariaHideApp={false}
        isOpen={modalIsOpen}
        onRequestClose={() => {
          setModalIsOpen(false);
        }}
      >
        <div>
          <h1>{name}</h1>
          <h2>{capital}</h2>
          <img src={flag} alt='' />
          <h3>{region}</h3>
          <button onClick={() => setModalIsOpen(false)}>Close</button>
        </div>
      </Modal>
    </div>
  );
};

export default ModalCard;
