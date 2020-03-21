import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = () => {
    const onToken = (token) => {
        fetch('/save-stripe-token', {
            method: 'POST',
            body: JSON.stringify(token),
        }).then(response => {
            response.json().then(data => {
                alert(`We are in business, ${data.email}`);
            });
        });
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name="CRWN CLOTHING Ltd"
            shippingAddress
            token={onToken}
            image='https:svgshare.come/i/CUZ.svg'
            stripeKey="pk_test_6JKzaDOi9QeUEgax3p0hlm4N00dOgM5XRH"
        />
    );
};

export default StripeButton;