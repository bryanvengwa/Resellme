import React, { useContext } from "react";
import { themeContext } from "../Context/ThemeContext";

export default function Features() {
	const { theme } = useContext(themeContext);
	const themeStyles = {
		backgroundColor: theme ? "white" : "black",
	};
	return (
		<>
			<section className="features">
				<div className="container">
					<div className="row">
						<div className="col-md-12  col-lg-6">
							<h1>Resellme's Features</h1>
							<p className="paragraph">
								The Resellme platform has a wide range of
								features which make it stand out from all
								competitors. Here we have just a few of those.
							</p>
						</div>
						<br />
						<div className="col-md-12 col-lg-6">
							<div className="row">
								<div className="col-md-6">
									<div
										style={themeStyles}
										className="card feature-card"
									>
										<div className="img-container">
											<img
												src="imgs/bill.png"
												className="img-fluid card-img-top"
												alt="bill"
											/>
										</div>
										<div className="card-body">
											<h4>Best Purchase Rates</h4>
											<p>
												You might think, with the
												service type, we would charge a
												looot for domain purchase. But
												no, our domains are actually
												quite cheap as compared to our
												competitors
											</p>
										</div>
									</div>
								</div>
								<div className="col-md-6">
									<div
										style={themeStyles}
										className="card feature-card"
									>
										<div className="img-container">
											<img
												src="imgs/bill.png"
												className="img-fluid card-img-top"
												alt="bill"
											/>
										</div>
										<div className="card-body">
											<h4>Best Purchase Rates</h4>
											<p>
												Usd payout for every client you
												get to purchase domain. We dont
												ask you to to purchase a domain.
												We do not ask you to get to 50
												clients to get a payout
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-md-6">
									<div
										style={themeStyles}
										className="card feature-card"
									>
										<div className="img-container">
											<img
												src="imgs/bill.png"
												className="img-fluid card-img-top"
												alt="bill"
											/>
										</div>
										<div className="card-body">
											<h4>No Monthly Commitments</h4>
											<p>
												As long as you have an account,
												you only can use the platform
												when you get a client to sell
												the service to. Your client pays
												for the service and you keep the
												profit
											</p>
										</div>
									</div>
								</div>
								<div className="col-md-6">
									<div
										style={themeStyles}
										className="card feature-card"
									>
										<div className="img-container">
											<img
												src="imgs/bill.png"
												className="img-fluid card-img-top"
												alt="bill"
											/>
										</div>
										<div className="card-body">
											<h4>Business Automaition</h4>
											<p>
												Place your business n auto pilot
												by making use of our plugins.
												Head over to our plugins
												 &intergraions panel to get
												started
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
