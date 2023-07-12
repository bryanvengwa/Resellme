import React from "react";
import "../scss/Header.scss";

export default function CasesCard(props) {
	return (
		<>
			<div style={props.themeStyles} id="feature-card" className="card ">
				<div className="img-container">
					<img
						src={`imgs/${props.img}`}
						className="img-fluid card-img-top"
						alt="bill"
					/>
				</div>
				<div className="card-body">
					<h4>{props.text}</h4>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua. Ut enim ad minim 
						
					</p>
				</div>
				<button>Read More</button>
			</div>
		</>
	);
}
