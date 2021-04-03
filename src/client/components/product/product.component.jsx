import React from "react";

import ShippingIcon from "../../assets/ic_shipping.png";
import { withRouter } from "react-router-dom";

import "./product.styles.scss";
import Currency from "../currency/currency.component";

const Product = ({
  id,
  imageUrl,
  price,
  condition,
  title,
  history,
  free_shipping,
}) => {
  return (
    <div className="product" onClick={() => history.push(`/items/${id}`)}>
      <img
        width="180"
        height="180"
        className="product__image"
        src={imageUrl}
        alt="image"
      />

      <div className="product__info">
        <span className="product__price">
          <Currency amount={price.amount} currency={price.currency} />
          {free_shipping ? (
            <img
              src={ShippingIcon}
              className="product__shipping"
              alt="shipping"
            />
          ) : (
            ""
          )}
        </span>
        <span className="product__title">{title}</span>
      </div>
      <span className="product__condition">{condition}</span>
    </div>
  );
};

export default withRouter(Product);
