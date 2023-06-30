import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import TestimonialCard from "./TestimonialCard";

export default function Testimonials() {
	const information = [
		{
			id: 1,
			name: "Jane Doe",
			company: "Netone",
			img: "imgs/bbe.png",
		},
		{
			id: 2,
			name: "John Doe",
			company: "Econet",
			img: "imgs/smiley.png",
		},
		{
			id: 3,
			name: "John Doe",
			company: "Econet",
			img: "imgs/volunteer.png",
		},
	];
	const [data, setData] = useState(information);

	const next = () => {
		setData((data) => {
			const arr = [...data];
			const next = arr.shift();
			arr.push(next);
			
			return arr;
		});
	};
          const previous = () => {
				setData((data) => {
					const arr = [...data];
					const next = arr.pop();
					arr.unshift(next);

					return arr;
				});
			};

	const elements = data.map((info) => {
		return (
			<TestimonialCard
				key={info.id}
				name={info.name}
				img={info.img}
				company={info.company}
			/>
		);
	});
	return (
		<>
			<section className="testimonials">
				<div className="container">
					<div className="row">
						<div className="col-lg-6">
							<h1>Client Testimonials</h1>
							<p>
								We value client feedback to help keep making
								revisions to our product to give more value to
								you the end user. These are some of the awesome
								reviews we got from some of our clients.
							</p>
							<div className="button-container">
								<button onClick={previous}>
									{" "}
									<FaArrowLeft />{" "}
								</button>
								<button onClick={next}>
									{" "}
									<FaArrowRight />
								</button>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="d-flex flex-container ">
								{elements}
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
