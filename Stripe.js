import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('your-publishable-key-here'); // Use your actual Stripe key

function Checkout({ price }) {
  const [paymentStatus, setPaymentStatus] = useState(null);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { error, paymentIntent } = await stripe.confirmCardPayment('client-secret-from-backend', {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });

    if (error) {
      setPaymentStatus('Payment Failed');
    } else if (paymentIntent.status === 'succeeded') {
      setPaymentStatus('Payment Successful');
    }
  };

  return (
    <div className="checkout">
      <h2>Complete Your Purchase</h2>
      <p>Price: ${price}</p>
      <form onSubmit={handleSubmit}>
        <CardElement />
        <button type="submit" disabled={!stripe}>Pay Now</button>
      </form>
      {paymentStatus && <p>{paymentStatus}</p>}
    </div>
  );
}

function CheckoutPage({ classItem }) {
  return (
    <Elements stripe={stripePromise}>
      <Checkout price={classItem.price} />
    </Elements>
  );
}

export default CheckoutPage;
