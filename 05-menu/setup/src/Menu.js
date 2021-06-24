import React from 'react';

const Menu = ({ menu }) => {
  return (
    <div>
      <section className='section-center'>
        {menu.map((items) => {
          const { id, title, img, desc, price } = items;
          return (
            <article key={id} className='menu-item'>
              <img src={img} alt={title} className='photo' />
              <div className='item-info'>
                <header>
                  <h4>{title}</h4>
                  <div className='price'> {price}</div>
                </header>
                <p className='item-text'>{desc}</p>
              </div>
            </article>
          );
        })}
      </section>
      menu component
    </div>
  );
};

export default Menu;
