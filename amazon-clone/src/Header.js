import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
	// eslint-disable-next-line
	const [{ basket, user }, dispatch] = useStateValue();
	const handleAuthentication = () => {
		if (user) {
			auth.signOut();
		}
	};

	return (
		<div className="header">
			<Link to="/">
				<img
					className="header__logo"
					src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
					alt=""
				/>
			</Link>
			<div className="header__search">
				<input className="header__searchInput" type="text" />
				<SearchIcon className="header__searchIcon" />
			</div>

			<div className="header__nav">
				<Link to={!user && "/login"}>
					<div className="header__option" onClick={handleAuthentication}>
						<span className="header__OptionLineOne">
							Hello {user ? user.email : "Guest"}
						</span>
						<span className="header__OptionLineTwo">
							{user ? "Sign Out" : "Sign In"}
						</span>
					</div>
				</Link>
				<div className="header__option">
					<span className="header__OptionLineOne">Returns</span>
					<Link to="/orders">
						<span className="header__OptionLineTwo">& Orders</span>
					</Link>
				</div>
				<div className="header__option">
					<span className="header__OptionLineOne">Your</span>
					<span className="header__OptionLineTwo">Prime</span>
				</div>
				<Link to="/checkout">
					<div className="header__optionBasket">
						<ShoppingBasketIcon />
						<span className="header__optionLineTwo header__basketCount">
							{basket?.length}
						</span>
					</div>
				</Link>
			</div>
		</div>
	);
}

export default Header;
