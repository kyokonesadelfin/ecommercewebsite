import React from 'react';
import { NavLink } from 'react-router-dom';


const About = () => {
	return (
		<div>
			<section id="about">
				<div className="container my-5 py-5 mt-5 pt-5">
					<div className="row">
						<div className="col-md-6">
							<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
							  <div class="carousel-indicators">
							    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
							    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
							    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
							  </div>
							  <div className="carousel-inner" id="carousel">
							    <div className="carousel-item active">
							      <img src="/assets/about.png" alt="About" />
							    </div>
							    <div className="carousel-item">
							      <img src="/assets/about2.jpg" alt="About" />
							    </div>
							    <div className="carousel-item">
							      <img src="/assets/about3.jpg" alt="About" />
							    </div>
							  </div>
							  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
							    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
							    <span class="visually-hidden">Previous</span>
							  </button>
							  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
							    <span class="carousel-control-next-icon" aria-hidden="true"></span>
							    <span class="visually-hidden">Next</span>
							  </button>
							</div>
						</div>
						<div className="col-md-6">
							<h3 className="fs-5 mb-0 bg-info" id="para">About Us</h3>
							<h1 className="display-6 mb-2 bg-info" id="para">Who <b>We</b> Are</h1>
							<hr className="w-50"/>
							<p className="lead mb-2" id="para">We are the top leading gadgets store in Souteast Asia. Our company started in 2005 in Singapore, now it boasts of total of 250 stores in Asia and expanding. Our core value is disseminating knowledge about technology to ordinary folks. We value camaraderie and purposefulness in everything we do. Our total of 1,000 employees could testify about our company culture. Our main headquarters is located in Singapore and we plan to expand our store to North America and Europe. </p>
							<p className="lead mb-2" id="para"><strong><b>Our Core Values</b></strong> are <b>Honesty, Camaraderie, Necessity and Integrity.</b> We take pride in being Asia's biggest gadgets distributor.</p> 
							<hr/>
							<NavLink to="./contact" className="btn btn-outline-info rounded-pill px-5 offset-4 fw-bolder" id="para"><i className="fa fa-commenting-o me-2"></i> Contact Us</NavLink>
						</div>
					</div>
				</div>
			</section>
		</div>
		);
}


export default About;