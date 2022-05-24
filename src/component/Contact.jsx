import React, { useState } from 'react';
import Swal from 'sweetalert2';


const Contact = () => {



	const [msg, setMsg] = useState({
		name : "",
		email : "",
		message : ""
	});

	const handleChange = (event) =>{
		let name = event.target.name;
		let value = event.target.value;

		setMsg({...msg, [name]:value});
	}

	// Handles Submit
	const handleSubmit = async (event)=> {
		event.preventDefault();
		//Object Destructuring
		//Store Object Data into Variables
		const {name, email, message} = msg;
		try {
			const res = await fetch('/message', {
				method : "POST",
				headers : {
					"Content-Type" : "application/json"
				},
				body : JSON.stringify({
					name, email, message
				})
			})

			if(res.status === 400 || !res){
				Swal.fire({
							icon: 'error',
							title: 'Oops'
						});
			} else {
				Swal.fire({
							icon: 'success',
							title: 'Message Sent'
						}).then((result) =>  {
							setMsg({
								name : "",
								email : "",
								message : ""
						})
			
				})
		
			}
		} catch (error) {
			console.log(error);
		}
	}


	return (
		<div>
			<section id="contact">
				<div className="container my-5 py-5 mb-5 pb-5">
					<div className="row">
						<div className="col-12">
							<h3 className="display-6 fs-5 text-center mb-0 fw-bolder" id="para">Contact Us</h3>
							<h1 className="display-5 text-center mb-4" id="para">Have Some <b>Question?</b> </h1>
							<hr className="w-25 mx-auto"/>
						</div>
					</div>
					<div className="row">
						<div className="col-md-6">
							<img src="/assets/contact.jpg" alt="Contact" className="w-75 h-85" />
						</div>
						<div className="col-md-6">
							<form onSubmit={handleSubmit} method="POST">
								<div className="mb-3">
								  <label for="name" className="form-label" id="para">Your Name</label>
								  <input type="text" className="form-control" id="name" placeholder="Jane Smith"
									name="name" value={msg.name} onChange={handleChange}/>
								</div>
								<div className="mb-3">
								  <label for="exampleFormControlInput1" class="form-label" id="para">Email address</label>
								  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" name="email" value={msg.email} onChange={handleChange}/>
								</div>
								<div className="mb-3">
								  <label for="exampleFormControlTextarea1" class="form-label" id="para">Your Message</label>
								  <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" name="message" value={msg.message} onChange={handleChange}></textarea>
								</div>
								<button type="submit" className="btn btn-info rounded-pill px-5 my-5 fw-bolder" id="para"><i className="fa fa-envelope me-2"></i> Send Message </button>
							</form>
						</div>
					</div>
				</div>
			</section>
		</div>
		);
}


export default Contact;