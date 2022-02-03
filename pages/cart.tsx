import CartItemList from '@components/CartItemList/Index';
import CartSummary from '@components/CartSummary/Index';
import { Divider } from 'semantic-ui-react';
import { useCart, useCartMutations } from '@store/Cart';

const cart = () => {
  const { items, subTotal } = useCart();
  const { removeFromCart, increaseElementQuantity, decreaseElementQuantity } =
    useCartMutations();

  return (
    <section className="mt-1">
      <CartItemList
        items={items}
        removeFromCart={removeFromCart}
        increaseElementQuantity={increaseElementQuantity}
        decreaseElementQuantity={decreaseElementQuantity}
      />
      <Divider />
      <CartSummary totalAmount={subTotal} />
      <style jsx>
        {`
          .mt-1 {
            margin-top: 1rem;
          }
        `}
      </style>
    </section>
  );
};

export default cart;
