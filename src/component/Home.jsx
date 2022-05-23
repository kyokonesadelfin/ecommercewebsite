import React from 'react';
import Products from './Products';
import About from './About';
import Contact from './Contact';


const Home = () => {
	return (
		<div className="hero pt-5">
			<div className="card bg-dark text-white border-0">
			  <img src="/assets/backgroundimg.jpg" className="card-img" alt="Background" height="700px" />
			  <div className="card-img-overlay d-flex flex-column justify-content-center">
			  	<div className="container">
			    <h5 className="card-title display-3 fw-bolder py-3 my-0" id="text">THE MOST POWERFUL LAPTOPS AND PHONES</h5>
			    <p className="card-text lead fw-bold fs-2" id="text">A ONE-STOP HUB. CHECK OUT THE LATEST COLLECTIONS.</p>
			    </div>
			  </div>
			</div>
			<Products/>
			<About/>
			<Contact/>
		</div>
		);
}


export default Home;