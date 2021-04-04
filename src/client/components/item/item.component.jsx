/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';

import { useHistory } from 'react-router-dom';
import ShippingIcon from '../../assets/ic_shipping.png';

import './item.styles.scss';
import Currency from '../currency/currency.component';

const Item = ({ id, imageUrl, price, condition, title, free_shipping }) => {
  const history = useHistory();

  const handleClick = () => history.push(`/items/${id}`);

  return (
    <div className='item' onClick={handleClick}>
      <img
        width='180'
        height='180'
        className='item__image'
        src={imageUrl}
        alt='price'
      />

      <div className='item__info'>
        <span className='item__price'>
          <Currency amount={price.amount} currency={price.currency} />
          {free_shipping ? (
            <img src={ShippingIcon} className='item__shipping' alt='shipping' />
          ) : (
            ''
          )}
        </span>
        <span className='item__title'>{title}</span>
      </div>
      <span className='item__condition'>{condition}</span>
    </div>
  );
};

export default Item;
