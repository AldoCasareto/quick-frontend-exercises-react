import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
const List = ({ handleDelete, list, handleEdit }) => {
  return (
    <div className='grocery-list'>
      {list.map((item) => (
        <article className='grocery-item' key={item.id}>
          <p className='title'>{item.title}</p>
          <div className='btn-container'>
            <button className='edit-btn' onClick={() => handleEdit(item.id)}>
              <FaEdit />
            </button>
            <button
              className='delete-btn'
              onClick={() => handleDelete(item.id)}
            >
              <FaTrash />
            </button>
          </div>
        </article>
      ))}
    </div>
  );
};

export default List;
