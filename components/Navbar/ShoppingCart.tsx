import React from 'react';
import Basket from '@components/SVGIcons/Basket';
import { useCart } from '@store/Cart';

const ShoppingCart = () => {
  const { count } = useCart();

  return (
    <div className="container">
      <Basket />
      <span className="text">Canasta ({count | 0})</span>
      <style jsx>
        {`
          .container {
            display: flex;
            align-items: center;
          }
          .text {
            margin-left: 0.5rem;
          }
        `}
      </style>
    </div>
  );
};

export default ShoppingCart;
