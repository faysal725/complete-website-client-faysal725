import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import SimpleCardForm from './SimpleCardForm';
import SplitForm from './SplitForm';
import './STYLE.css'

const ProcessPayment = () => {
    const stripePromise = loadStripe(

        'pk_test_51J2voRDne0cvlxeiDC8KaBl2Qi3ZYfp5MBLLjM8Cokk3WLq32P6UrXbylNkJvjPVfnV5bcYoP1pJwEsdbE9R7e6y00G0uDyNTf'
        );
    return (
        <Elements stripe={stripePromise}>
            <SplitForm></SplitForm>
        </Elements>
    );
};

export default ProcessPayment;