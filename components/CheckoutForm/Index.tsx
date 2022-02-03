import React, { useState } from 'react';
import { Segment, Button, Message, Icon } from 'semantic-ui-react';
import {
  PaymentElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';

type CheckoutFormProps = {
  subTotal: number;
};

const Index = ({ subTotal }: CheckoutFormProps) => {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: `${process.env.NEXT_PUBLIC_HOST}/success`,
      },
    });

    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.
    if (error.type === 'card_error' || error.type === 'validation_error') {
      setMessage(error.message);
    } else {
      setMessage('An unexpected error occured.');
    }

    setIsLoading(false);
  };

  return (
    <Segment style={{ marginTop: '3rem' }}>
      <form id="payment-form" onSubmit={handleSubmit}>
        <PaymentElement id="payment-element" />
        <Button
          disabled={isLoading || !stripe || !elements}
          id="submit"
          style={{ marginTop: '1rem' }}
          color="blue"
          fluid
        >
          <span id="button-text">
            {isLoading ? (
              <div className="spinner" id="spinner">
                Loading...
              </div>
            ) : (
              `Pay now $ ${subTotal}`
            )}
          </span>
        </Button>
        {/* Show any error or success messages */}
        {message && (
          <Message error>
            <Icon name="exclamation circle" size="large" />
            {message}
          </Message>
        )}
      </form>
    </Segment>
  );
};

export default Index;
