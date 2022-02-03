import { useEffect, useState } from 'react';
import { Loader, Segment } from 'semantic-ui-react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from '@components/CheckoutForm/Index';
import { useCart } from '@store/Cart';
import { useRouter } from 'next/router';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PK);

export default function checkout() {
  const { subTotal } = useCart();
  const [clientSecret, setClientSecret] = useState('');
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    function getSecretKey() {
      if (subTotal > 0) {
        fetch('/api/create-payment-intent', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ subTotal }),
        })
          .then((res) => res.json())
          .then((data) => {
            setClientSecret(data.clientSecret);
            setLoading(false);
          })
          .catch((error) => console.log(error));
      } else {
        router.replace('/');
      }
    }

    getSecretKey();
  }, []);

  const options = {
    clientSecret,
  };

  const onLoading = () =>
    loading && (
      <Segment vertical style={{ minHeight: 300 }}>
        <Loader active>Loading</Loader>
      </Segment>
    );

  const onRender = () =>
    !loading &&
    clientSecret && (
      <Elements options={options} stripe={stripePromise}>
        <CheckoutForm subTotal={subTotal} />
      </Elements>
    );

  return (
    <div>
      {onLoading()}
      {onRender()}
    </div>
  );
}
