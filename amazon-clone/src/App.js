import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
	"pk_test_51JZxQ9SI9BMxQpTJnIAVAMWZd4J5NfHztEBA7tbfsKKLpWQJ4lrCPe8hpv1V9MBvXbsZ2BbtQ10mufGXv8mZ8wke002gknclfo"
);

function App() {
	// eslint-disable-next-line
	const [{}, dispatch] = useStateValue();

	useEffect(() => {
		auth.onAuthStateChanged((authUser) => {
			console.log("USER IS >>>", authUser);
			if (authUser) {
				// the user just logged in / the user was logged
				dispatch({
					type: "SET_USER",
					user: authUser
				});
			} else {
				//the user is logged out
				dispatch({
					type: "SET_USER",
					user: null
				});
			}
		});
		// eslint-disable-next-line
	}, []);

	return (
		<Router>
			<div className="app">
				<Switch>
					<Route path="/login">
						<Login />
					</Route>
					<Route path="/checkout">
						<Header />
						<Checkout />
					</Route>
					<Route path="/payment">
						<Header />
						<Elements stripe={promise}>
							<Payment />
						</Elements>
					</Route>
					<Route path="/">
						<Header />
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
