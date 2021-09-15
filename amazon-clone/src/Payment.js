import React, { useEffect, useState } from "react";
import CheckoutProduct from "./CheckoutProduct,";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import { Link, useHistory } from "react-router-dom";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { getBasketTotal } from "./reducer";
import formatter from "./formatter";
import axios from "./axios";

function Payment() {
	const history = useHistory();
	const stripe = useStripe();
	const elements = useElements();

	const [{ basket, user }] = useStateValue();
	const [succeeded, setSucceeded] = useState(false);
	const [processing, setProcessing] = useState("");
	const [error, setError] = useState(null);
	const [disabled, setDisabled] = useState(true);
	const [clientSecret, setClientSecret] = useState(true);

	useEffect(() => {
		const getClientSecret = async () => {
			const response = await axios({
				method: "POST",
				url: `/payment/create?total=${getBasketTotal(basket) * 100}`
			});
			setClientSecret(response.data.clientSecret);
		};

		getClientSecret();
	}, [basket]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setProcessing(true);
		//eslint-disable-next-line
		const payload = await stripe
			.confirmCardPayment(clientSecret, {
				payment_method: {
					card: elements.getElement(CardElement)
				}
			})
			.then(({ paymentIntent }) => {
				//paymentIntent = payment information
				setSucceeded(true);
				setError(null);
				setProcessing(false);

				history.replace("/orders");
			});
	};

	const handleChange = (e) => {
		setDisabled(e.empty);
		setError(e.error ? e.error.message : "");
	};

	return (
		<div className="payment">
			<div className="payment__container">
				<h1>
					Checkout (<Link to="checkout">{basket.length} items</Link>)
				</h1>
				<div className="payment__section">
					<div className="payment__title">
						<h3>Delivery Address</h3>
					</div>
					<div className="payment__address">
						<p>{user?.email}</p>
						<p>123 React Lane</p>
						<p>Los Angeles, CA</p>
					</div>
				</div>
				<div className="payment__section">
					<div className="payment__title">
						<h3>Review items and delivery</h3>
					</div>
					<div className="payment__items">
						{basket.map((item) => (
							<CheckoutProduct
								id={item.id}
								image={item.image}
								price={item.price}
								rating={item.rating}
								title={item.title}
							/>
						))}
					</div>
				</div>
				<div className="payment__section">
					<div className="payment__title">
						<h3>Payment Method</h3>
					</div>
					<div className="payment__details">
						{/* stripe integration */}
						<form onSubmit={handleSubmit}>
							<CardElement onChange={handleChange} />
							<div className="payment__priceContainer">
								<h3>Order Toral: {formatter(getBasketTotal(basket))}</h3>
								<button disabled={processing || disabled || succeeded}>
									<span>{processing ? <p>Processing</p> : "Buy Now"}</span>
								</button>
							</div>
							{error && <div>{error}</div>}
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Payment;
