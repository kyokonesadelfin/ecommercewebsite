import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'; 
import Swal from 'sweetalert2';




const Footer = () => {


	const [sub, setSub] = useState({
		email : ""
	})

	const handleChange = (event) =>{
		let name = event.target.name;
		let value = event.target.value;

		setSub({...sub, [name]:value});
	}

	const handleSubmit = async (event)=> {
		event.preventDefault();
		//Object Destructuring
		//Store Object Data into Variables
		const {email} = sub;
		try {
			const res = await fetch('https://whispering-gorge-87073.herokuapp.com/subscribe', {
				mode: 'no-cors',
				method : "POST",
				headers : {
					"Content-Type" : "application/json"
				},
				body : JSON.stringify({
					email
				})
			})

			if(res.status === 400 || !res){
				Swal.fire({
							icon: 'error',
							title: 'Oops..',
							text: 'You have not entered a valid email.'
				});
			} else {
				Swal.fire({
							icon: 'success',
							title: 'Good Job!',
							text: 'You have successfully subscribed to our newsletter.'
				}).then((result) =>  {
					setSub({
						email : ""
				})
		
				})
		
			} 
		} catch (error) {
			console.log(error);
		}
	}



	return (
		<div>
			<footer className="footer text-white bg-dark pt-3 mt-5" id="para">
				<div className="container pt-3">
						<div className="row">
							<div className="col-3" id="para">
								<h4>HIGH-TECH HUB</h4>
							</div>

							<div className="col-2">
								<h5>COMPANY</h5>
								<ul className="nav flex-column">
									<li className="nav-item mb-2">
										<NavLink to="./about" className="nav-link p-0 text-white" id="para">About Us</NavLink>
									</li>
									<li className="nav-item mb-2">
										<NavLink to="./about" className="nav-link p-0 text-white" id="para">Blog</NavLink>
									</li>
									<li className="nav-item mb-2">
										<NavLink to="./about" className="nav-link p-0 text-white" id="para">Terms and Conditions</NavLink>
									</li>
									<li className="nav-item mb-2">
										<NavLink to="./products" className="nav-link p-0 text-white" >Privacy Policy</NavLink>
									</li>

								</ul>
							</div>



							<div className="col-4 offset-2">
								<form onSubmit={handleSubmit} method="POST">
									<h5 id="para">Subscribe to our newsletter.</h5>
									<p id="para">Monthly digest of whats new and exciting from us.</p>
									<div className="d-flex w-100 gap-3" id="para">
										<label htmlFor="newsletter1" className="visually-hidden">
											Email address
										</label>
										<input 
											id="newsletter1"
											type="text"
											className="form-control"
											placeholder="Email address"
											name="email" value={sub.email} onChange={handleChange}
										/>

										<button className="btn btn-danger rounded-pill px-5" type="submit" id="para">Subscribe</button>
									</div>
								</form>
							</div>

						</div>

						<div className="d-flex justify-content-between pt-4 mt-4 border-top" id="para">
							<p>Copyright© 2022 High-Tech Hub Store, E-Commerce Website by Kyokonesa Delfin.</p>
							<ul className="list-unstyled d-flex">
								<li className="ms-3">
									<a className="link-light" href="http://www.facebook.com" target="_blank" rel="noreferrer">
										<i className="fa fa-facebook-official fa-2x"></i>
									</a>
								</li>
								<li className="ms-3"> 
									<a className="link-light" href="http://www.instagram.com" target="_blank" rel="noreferrer">
										<i className="fa fa-instagram fa-2x"></i>
									</a>
								</li>
								<li className="ms-3">
									<a className="link-light" href="http://www.twitter.com" target="_blank" rel="noreferrer">
										<i className="fa fa-twitter fa-2x"></i>
									</a>
								</li>
								<li className="ms-3">
									<a className="link-light" href="http://www.tumblr.com" target="_blank" rel="noreferrer">
										<i className="fa  fa-tumblr-square fa-2x"></i>
									</a>
								</li>
							</ul>
						</div>
				</div>
			</footer>
		</div>
		);
}

export default Footer;