import React from "react";
import StartData from "./StartData";
import StartCard from "./StartCard";

export default function Start() {
	const elements = StartData.map((card) => {
		return (
			<StartCard
				key={card.id}
				number={card.id}
				img={card.img}
				heading={card.heading}
				paragraph={card.paragraph}
			/>
		);
	});
	return (
		<>
			<br />
			<br />
			<br />
			<br />
			<section className="start">
				<h1>How To Get Started</h1>
				<br />
				<br />
				<div className="container">
					<div className="row card-container">{elements}</div>
				</div>
				<div className="button-container">
					<button>Get Started</button>
				</div>
			</section>
		</>
	);
}
