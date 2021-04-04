import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useStore, getItem } from '../../context';

import Spinner from '../../components/spinner/spinner.component';
import BreadCrumb from '../../components/breadcrumb/breadcrumb.component';
import Checkout from '../../components/checkout/checkout.component';

import './detail.styles.scss';

const Detail = () => {
  const {
    state: { isLoading, selectedItem: itemDetail }, dispatch,
  } = useStore();
  const { id } = useParams();
  useEffect(() => {
    getItem(dispatch, id);
  }, [id]);

  return isLoading ? (
    <Spinner />
  ) : (
    itemDetail ? (
      <>
        <BreadCrumb />
        <div className='detail'>
          <div className='detail__container'>
            <img src={itemDetail.picture} width='680' alt={itemDetail.title} />
            <div className='detail__content'>
              <span className='detail__title'>Descripción del producto</span>
              <span className='detail__description'>{itemDetail.description}</span>
            </div>
          </div>
          <Checkout
            condition={itemDetail.condition}
            title={itemDetail.title}
            price={itemDetail.price}
            sold_quantity={itemDetail.sold_quantity}
          />
        </div>
      </>
    ) : <></>
  );
};

export default Detail;
