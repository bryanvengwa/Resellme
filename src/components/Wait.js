import React from 'react'

export default function Wait() {
  return (
		<>
			<section className="wait">
				<div className="container">
					<div className="row">
						<div className="col-md-12 col-lg-6">
							<div className="img-container">
								<img
									src="imgs/lady.png"
									className="img-fluid"
									alt=""
								/>
							</div>
						</div>
						<div className="col-md-12 col-lg-6">
							<div className="text-container">
								<h2>Wait , What?</h2>
								<p>
									Resellme allows for you to purchase domains
									through our platform without paying money
									upfront. All you need to do is have a client
									who will pay for the domain and you get to
									keep the profit deducted from the domain
									purchase price!?? <br />  Buying domains through the
									platforms is   
									                <strong>SUPER CHEAP</strong>
								</p>
								<button>Read More</button>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
  );
}
