import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';


const Signup = () => {

	const history = useHistory();

	const [user, setUser] = useState({
		fname : "",
		lname : "",
		email : "",
		password : ""
	});

	//handles input
	const handleInput = (event) =>{
		let name = event.target.name;
		let value = event.target.value;

		setUser({...user, [name]:value});
	}

	// Handles Submit
	const handleSubmit = async (event)=> {
		event.preventDefault();
		//Object Destructuring
		//Store Object Data into Variables
		const {fname, lname, email, password} = user;
		try {
			const res = await fetch('https://whispering-gorge-87073.herokuapp.com/signup', {
				mode: 'no-cors',
				method : "POST",
				headers : {
					"Content-Type" : "application/json"
				},
				body : JSON.stringify({
					fname, lname, email, password
				})
			})

			if(res.status === 400 || !res){
				Swal.fire({
							icon: 'error',
							title: 'Oops',
							text: 'Please try again.'
						});
			} else {
				Swal.fire({
							icon: 'success',
							title: 'Congratulations!',
							text: 'You have successfully registered.'
						}).then((result) =>  {
							window.location.reload()
							history.pushState('/')
						})			
			}
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<div>
			<button type="button" className="btn btn-outline-info px-3 py-1 fw-bolder" data-bs-toggle="modal" data-bs-target="#signupModal">
			  <span className="fa fa-user-plus me-2"></span>SIGN UP
			</button>
		
			<div className="modal fade" id="signupModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
			  <div className="modal-dialog">
			    <div className="modal-content">
			      <div className="modal-header">
			        <h5 className="modal-title" id="exampleModalLabel">Sign Up</h5>
			        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
			      </div>
			      <div className="modal-body">
			      	<button className="btn btn-primary w-100 mb-4">
			      		<span className="fa fa-google me-2"></span>Sign up With Google
			      	</button>
			      	<button className="btn btn-primary w-100 mb-4">
			      		<span className="fa fa-facebook me-2"></span>Sign up With Facebook
			      	</button>
			      	<p className="mx-auto text-center"><hr/>OR</p>
			        <form onSubmit={handleSubmit} method="POST">
			          <div className="mb-3">
			            <label htmlFor="exampleInput" className="form-label">First Name</label>
			            <input type="text" className="form-control" id="name" name="fname" value={user.fname}
			            onChange={handleInput}/>
			           
			          </div>
			          <div className="mb-3">
			            <label htmlFor="exampleInput" className="form-label">Last Name</label>
			            <input type="text" className="form-control" id="name" name="lname" value={user.lname}
			            onChange={handleInput}/>
			           
			          </div>
			          <div className="mb-3">
			            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
			            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
			            name="email" value={user.email}
			            onChange={handleInput}/>
			            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
			          </div>
			          <div className="mb-3">
			            <label for="exampleInputPassword1" className="form-label">Password</label>
			            <input type="password" className="form-control" id="exampleInputPassword1" name="password" value={user.password}
			            onChange={handleInput}/>
			          </div>
			          <div className="mb-3 form-check">
			            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
			            <label className="form-check-label" for="exampleCheck1">I agree to the <a href="#">Terms and Conditions</a></label>
			          </div>
			          <button type="submit" className="btn btn-outline-primary w-100 mt-3">Register</button>
			        </form>
			      </div>
			    </div>
			  </div>
			</div>
		</div>
		)
}


export default Signup