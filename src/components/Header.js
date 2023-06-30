import React from "react";
import "../scss/Header.scss";

export default function Header() {
	return (
		<>
			<header>
				<h1>Buy and sell domains with no capital!</h1>
				<p>
					Resellme allows you to buy and sell domains keeping the
					profits, all in under 5 minutes.
				</p>
				<div className="button-container">
					<button className="white">Sign Up For Free</button>
					<button>Read About Us</button>
				</div>
			</header>
			<div className="laptop-container">
				<div className="img-container">
					<img src="imgs/laptop.png" className="img-fli" alt="" />
					<div className="overlay">
						<img
							src="imgs/play.png"
							className="img-fluid"
							alt="play button"
						/>
					</div>
				</div>
			</div>
		</>
	);
}
