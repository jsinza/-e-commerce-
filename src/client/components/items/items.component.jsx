import React from 'react';

import Item from '../item/item.component';
import Spinner from '../spinner/spinner.component';

import { useStore } from '../../context';

import './items.styles.scss';

const ItemsNotFound = () => (
  <div className='items-not-found'>
    <div className='items-not-found__container'>
      <h3 className='items-not-found__info'>
        No hay Productos que coincidan con tu búsqueda.
      </h3>
    </div>
  </div>
);

const Items = () => {
  const {
    state: { isLoading, items },
  } = useStore();

  return isLoading ? (
    <Spinner />
  ) : Array.isArray(items) && items.length > 0 ? (
    <div className='items'>
      {items.map(item => (
        <Item
          key={item.id}
          id={item.id}
          imageUrl={item.picture}
          price={item.price}
          condition={item.condition}
          title={item.title}
          free_shipping={item.free_shipping}
        />
      ))}
    </div>
  ) : (
    <ItemsNotFound />
  );
};

export default Items;
