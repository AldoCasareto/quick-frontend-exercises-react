import React, { useState, useEffect } from 'react';
import List from './List';
import Alert from './Alert';

function App() {
  const getLocalStorage = () => {
    let list = localStorage.getItem('list');
    if (list) {
      return JSON.parse(localStorage.getItem('list'));
    } else {
      return [];
    }
  };
  const [list, setList] = useState(getLocalStorage);
  const [name, setName] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({
    show: false,
    mgs: '',
    type: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      showAlert(true, 'danger', 'please enter value');
    } else if (name && isEditing) {
      setList(
        list.map((item) => {
          if (item.id === editId) {
            return { ...item, title: name };
          }
          return item;
        })
      );
      setEditId(null);
      setIsEditing(false);
      setName('');
      showAlert(true, 'success', 'Item was edited');
    } else {
      const newItem = {
        title: name,
        id: new Date().getTime().toString(),
      };
      setList(list.concat(newItem));
      setName('');
      showAlert(true, 'success', 'Item added');
    }
  };

  const showAlert = (show = false, type = '', msg = '') => {
    setAlert({ show, type, msg });
  };
  const handleEdit = (id) => {
    const matchItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditId(id);
    setName(matchItem.title);
  };

  const handleDelete = (id) => {
    const filterItem = list.filter((item) => item.id !== id);
    showAlert(true, 'danger', 'Item deleted');
    setList(filterItem);
  };

  const clearList = () => {
    showAlert(true, 'danger', 'empty list');
    setList([]);
  };

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
  }, [list]);

  return (
    <section className='section-center'>
      <form className='grocery-form' onSubmit={handleSubmit}>
        <div>
          {alert.show && <Alert list={list} {...alert} showAlert={showAlert} />}
        </div>
        <h3>List</h3>
        <div className='form-control'>
          <input
            className='grocery'
            autoFocus
            placeholder='add your item'
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button className='submit-btn' type='submit'>
            {isEditing ? 'Edit' : 'Add'}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className='grocery-container'>
          <List
            handleDelete={handleDelete}
            list={list}
            handleEdit={handleEdit}
          />
          <button className='clear-btn' onClick={clearList}>
            clear items
          </button>
        </div>
      )}
    </section>
  );
}

export default App;
