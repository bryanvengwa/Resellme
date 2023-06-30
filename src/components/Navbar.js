import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "../scss/navbar.scss";
function Nav(props) {
	return (
		<>
			<nav className={`nav-pc ${props.decider} nav-mobile `}>
				<div className="nav-container nav-container-mobile">
					<ul>
						<li>
							{" "}
							<div className="logo-container">
								<img
									src="imgs/logo.png"
									className="img-fluid"
									alt=""
								/>
							</div>{" "}
						</li>
						<li>
							<a href="#Dd">Docs</a>
						</li>
						<li>
							<a href="#>">Blog</a>
						</li>
						<li>
							<a href="#?">About Us</a>
						</li>
					</ul>

					<ul>
						<li>
							<a href="#Dd">
								Support
								<span>
									<img src="imgs/arrow.png" alt="" />
								</span>
							</a>
						</li>
						<li>
							<a href="#>">
								Portal{" "}
								<span>
									<img src="imgs/arrow.png" alt="" />
								</span>{" "}
							</a>
						</li>
						<li>
							<span>
								<img
									src="imgs/sun.png"
									className="img-fluid sun"
									alt="sun"
								/>
							</span>
						</li>

						<li>
							<a href="#?">Register</a>
						</li>

						<li>
							<form>
								<div className="search-container">
									<input
										type="text"
										placeholder="Search"
										name="search"
									/>
									<button type="submit">
										<FaSearch />
									</button>
								</div>
							</form>
						</li>
					</ul>
				</div>
			</nav>
		</>
	);
}

export default function Navbar() {
	
	const [active, setActive] = useState(false);
	const toggle = () => {
		setActive((old) => !old);
	};

	return (
		<>
			{active && <Nav />}
			<Nav decider={'decider'} />

			<div onClick={toggle} className={`menu ${active ? "open" : ""}`}>
				<div className="bar one"></div>
				<div className="bar two"></div>
				<div className="bar three"></div>
			</div>
		</>
	);
}
