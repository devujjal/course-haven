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
import PropTypes from "prop-types";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";


const CheckoutForm = ({ price, closeModal }) => {
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
        setIsLoading(true)

        if (!stripe || !elements) {
            return;
        }


        const card = elements.getElement(CardElement);

        if (!card) {
            return;
        }

        // here we can distructer the "paymentMethod", but we remove because, it doesn't have any action;
        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            // console.log('error: ', error)
            setMessage(error.message)
            setIsLoading(false)
            return;
        } else {
            // console.log('paymentMethod: ', paymentMethod);
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


        setIsLoading(false);
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

            <div className='flex mt-2 justify-around'>
                <button
                    type='submit'
                    disabled={!stripe || !clientSecret || loading}
                    className='inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2'
                >
                    {
                        loading ? <LoadingSpinner /> : 'Pay'
                    }
                </button>
                <button
                    onClick={closeModal}
                    type='button'
                    className='inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2'
                >
                    No
                </button>


            </div>

            {
                message && <p className="text-red-500">{message}</p>
            }

        </form>
    );
};

CheckoutForm.propTypes = {
    price: PropTypes.string,
    closeModal: PropTypes.func
}

export default CheckoutForm;