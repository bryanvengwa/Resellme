import React from "react";

export default function FeatureCard(props) {
	
	return (
		<>
			<div  className="card tech-card">
				<img
					src={`imgs/${props.img}`}
					alt="tech"
					className="img-fluid"
				/>
			</div>
		</>
	);
}
