import React from 'react';

import Currency from '../currency/currency.component';

import './checkout.styles.scss';

const Checkout = ({ condition, title, price, sold_quantity }) => {
  return (
    <div className='checkout'>
      <span className='checkout__condition'>
        {condition}
        {' '}
        -
        {sold_quantity}
        {' '}
        vendidos
      </span>
      <span className='checkout__title'>{title}</span>
      <div className='checkout__price'>
        <Currency
          amount={price.amount}
          currency={price.currency}
          decimalNumber={2}
          fontSize={46}
        />
      </div>
      <button type='button' className='checkout__pay'>
        Comprar
      </button>
    </div>
  );
};

export default Checkout;
