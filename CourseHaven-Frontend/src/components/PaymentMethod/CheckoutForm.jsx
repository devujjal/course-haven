import {
    CardElement,
    useStripe,
    useElements,
} from "@stripe/react-stripe-js";

import './CheckoutFrom.css';
import { useEffect, useState } from "react";
import toast from 'react-hot-toast';
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAuth from "../../hooks/useAuth";


const CheckoutForm = ({ price }) => {
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useAuth();
    const axiosPublic = useAxiosPublic();
    const [clientSecret, setisClientSecret] = useState(null);
    const [loading, setIsLoading] = useState(false)
    const [message, setMessage] = useState('');

    const totalPrice = parseFloat(price);

    useEffect(() => {
        const getClientSecret = async () => {
            if (!totalPrice || totalPrice < 1) {
                return;
            }

            try {
                const res = await axiosPublic.post('/create-payment-intent', { price: totalPrice });
                setisClientSecret(res.data.clientSecret);

            } catch (error) {
                toast.error(error.message || 'Failed to create payment intent')
            }
        }

        getClientSecret();
    }, [axiosPublic, totalPrice])



    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }


        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log('error: ', error)
            setMessage(error.message)
            setIsLoading(false)
            return;
        } else {
            console.log('paymentMethod: ', paymentMethod);
            setMessage('');
        }


        // //confirmCardPayment
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    name: user?.displayName,
                    email: user?.email
                }

            }
        })

        if (confirmError) {
            setMessage(confirmError.message);
            setIsLoading(false)
            return;
        }

        if (paymentIntent.status === 'succeeded') {
            console.log("From payment intent: ", paymentIntent);
        }


    }


    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button type="submit" disabled={!stripe}>
                Pay
            </button>
        </form>
    );
};

export default CheckoutForm;