import React, { useState } from 'react';
import { Input, Icon, Transition, Button, Label } from 'semantic-ui-react';
import { useCartMutations, useCart } from '@store/Cart';

type AddToCartProps = {
  product: TProduct;
};

const addToCartRequest = () =>
  new Promise((resolve) => {
    window.setTimeout(resolve, 600);
  });

const validate = (quantity: number) => {
  if (quantity < 1) throw new Error("Can't be blank");
};

const AddCart = ({ product }: AddToCartProps) => {
  const { isAdded, getCartQuantity } = useCart();
  const [loading, setLoading] = useState(false);
  const [quantity, setQuantity] = useState(
    isAdded(product.id) ? getCartQuantity(product.id) : 1
  );
  const [visible, setVisible] = useState(isAdded(product.id));
  const [error, setError] = useState(null);
  const { addToCart } = useCartMutations();

  const handleSubmit = async () => {
    try {
      validate(quantity);
      setLoading(true);
      await addToCartRequest();
      addToCart(product, quantity);
      setVisible(true);
    } catch (error) {
      setError(error);
      console.error(`Error: ${error}` || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  const handleOnChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(parseInt(target.value, 10));
  };

  const onError = error ? (
    <div style={{ color: 'red', position: 'absolute' }}>{error.message}</div>
  ) : null;

  return (
    <>
      <Input
        action={{
          color: 'green',
          icon: 'plus cart',
          content: 'Add to Cart',
          onClick: handleSubmit,
          loading,
        }}
        step="1"
        min="1"
        value={quantity}
        placeholder="Search..."
        type="number"
        onChange={handleOnChange}
      />
      {onError}
      <Transition duration={{ hide: 500, show: 500 }} visible={visible}>
        <div
          // className="mb-1"
          style={{
            color: 'green',
            position: 'absolute',
          }}
        >
          <Icon name="check" />
          Added to cart
        </div>
      </Transition>
      <style>
        {`
          .mb-1 {
            margin-bottom: 20rem;
          }
        `}
      </style>
    </>
  );
};

export default AddCart;
