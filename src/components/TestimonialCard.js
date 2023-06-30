import React from 'react'

export default function TestimonialCard(props) {
  return (
		<>
			<div className="card testimonial-card">
				<div className="img-container">
					<img
						src={props.img}
						alt=""
						className=" img-fluid img-top"
					/>
				</div>
				<div className="card-body">
					<div className="colon-container">
						<div className="colon">
							<h3>“</h3>
						</div>
					</div>
					<h4>{props.name}</h4>
					<h6>{props.company}</h6>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua. Ut enim ad minim veniam
					</p>
				</div>
			</div>
		</>
  );
}
