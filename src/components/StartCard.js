import React from "react";

export default function StartCard(props) {
	return (
		<>
			<div id="start-card" className="card">
				<div className="number">
					<h1>{props.number}</h1>
				</div>
				<div className="icon-container">
                                                  <img src={`imgs/${props.img}`} alt="roll" className="img-fluid" />
                                        </div>
				<div className="card-body">
					<h3>{props.heading}</h3>
					<p>{props.paragraph}</p>
				</div>
			</div>
		</>
	);
}
