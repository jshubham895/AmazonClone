import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
	return (
		<div className="home">
			<div className="home__container">
				<img
					src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/gateway/placement/launch/All_Or_Nothing_Tottenham_Hotspur_S1/AONT_S1_GWBleedingHero_FT_COVIDUPDATE_XSite_1500X600_PV_en-GB._CB406302419_.jpg"
					alt=""
					className="home__image"
				/>

				<div className="home__row">
					<Product
						title="2021 Apple iPad Pro with Apple M1 chip (11-inch/27.96 cm, Wi-Fi, 2TB) - Silver (3rd Generation)"
						price="1,70,900.00"
						image="https://m.media-amazon.com/images/I/81MF389-9gS._SL1500_.jpg"
						rating={4}
					/>
					<Product
						title="New Apple iPhone 12 Pro Max (128GB) - Silver"
						price="1,15,900.00"
						image="https://m.media-amazon.com/images/I/71umuN8XVeL._SL1500_.jpg"
						rating={5}
					/>
				</div>

				<div className="home__row">
					<Product
						title="New Apple Watch Series 6 (GPS + Cellular, 44mm) - Product(RED) - Aluminium Case with Product(RED) - Sport Band"
						price="47,900.00"
						image="https://m.media-amazon.com/images/I/812m5ITIUjL._SL1500_.jpg"
						rating={4}
					/>
					<Product
						title="Sony Bravia 189 cm (75 inches) 4K Ultra HD Smart LED Google TV KD-75X80J (Black) (2021 Model) | with Alexa Compatibility"
						price="2,08,989.00 "
						image="https://m.media-amazon.com/images/I/81P7iSxFzzS._SL1500_.jpg"
						rating={5}
					/>
					<Product
						title="PS5 Marvel's Spiderman Miles morales Ultimate Edition"
						price="4,079.00"
						image="https://m.media-amazon.com/images/I/81tH0uekxiL._SL1500_.jpg"
						rating={5}
					/>
				</div>

				<div className="home__row">
					<Product
						title="Roll over image to zoom in
Sony HT-S700RF Real 5.1ch Dolby Audio Soundbar for TV with Tall boy Rear Speakers & Subwoofer, 5.1ch Home Theatre System (1000W, Bluetooth & USB Connectivity,HDMI & Optical Connectitvity)"
						price="49,990.00"
						image="https://m.media-amazon.com/images/I/51eVDK+PbCL._SL1500_.jpg"
						rating={4}
					/>
				</div>
			</div>
		</div>
	);
}

export default Home;
