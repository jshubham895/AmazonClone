import React from "react";
import "./Subtotal.css";
// import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import formatter from "./formatter";
import { useHistory } from "react-router-dom";

function Subtotal() {
	const history = useHistory();
	// eslint-disable-next-line
	const [{ basket }, dispatch] = useStateValue();

	return (
		<div className="subtotal">
			{/* <CurrencyFormat
				renderText={(value) => (
					<>
						<p>
							Subtotal ({basket.length} items): <strong>{value}</strong>
						</p>
						<small className="subtotal__gift">
							<input type="checkbox" /> This order contains a gift.
						</small>
					</>
				)}
				decimalScale={2}
				thousandSeparator={true}
				value={getBasketTotal(basket)}
				displayType={"text"}
				prefix={"₹"}
			/> */}
			<p>
				Subtotal ({basket.length} items):{" "}
				<strong>{formatter(getBasketTotal(basket))}</strong>
			</p>
			<small className="subtotal__gift">
				<input type="checkbox" /> This order contains a gift.
			</small>
			<button onClick={(e) => history.push("/payment")}>
				Proceed to Checkout
			</button>
		</div>
	);
}

export default Subtotal;
