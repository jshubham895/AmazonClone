import React from "react";
import formatter from "./formatter";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, price, rating, image }) {
	const [{ basket }, dispatch] = useStateValue();

	const addToBasket = () => {
		//dispatch the item into the data layer
		dispatch({
			type: "ADD_TO_BASKET",
			item: {
				id: id,
				title: title,
				image: image,
				price: price,
				rating: rating
			}
		});
	};

	return (
		<div className="product">
			<div className="product__info">
				<p>{title}</p>
				<p className="product__price">
					<small> &#8377; </small>
					<strong>{formatter(price)}</strong>
				</p>
				<div className="product__rating">
					{Array(rating)
						.fill()
						.map((_, i) => (
							<p>⭐</p>
						))}
				</div>
			</div>
			<img src={image} alt="" />

			<button onClick={addToBasket}>Add To Basket</button>
		</div>
	);
}

export default Product;
