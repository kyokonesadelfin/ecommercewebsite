import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';




const Login = () => {

	const history = useHistory()

	const [user, setUser] = useState({
		email : '',
		password : '',
		verifypassword:''
	});

	// Handle Input
	const handleChange = (event) =>{
		let name = event.target.name
		let value = event.target.value

		setUser({...user, [name]:value})
	}


	// Handle Login

	const handleSubmit = async (event) =>{
		event.preventDefault();
		const {email, password} = user;
		try {
			const res = await fetch('https://whispering-gorge-87073.herokuapp.com/login', {
				method : "POST",
				headers : {
					
					"Content-Type" : "application/json"
				},
				body : JSON.stringify({
					email, password
				})
			});

			if(res.status === 400 || !res){
				Swal.fire({
							icon: 'error',
							title: 'Oops',
							text: 'You have entered wrong credentials'
						})
			} else {

				Swal.fire({
							icon: 'success',
							title: 'Login Successful',
							text: 'You have inserted the correct credentials'
						}).then((result) =>  {
						if(result.isConfirmed){
							history.push('https://whispering-gorge-87073.herokuapp.com/')
							window.location.reload();
						}
				})
				
			}

		} catch (error) {
			console.log(error);

		} 

	
	}



	
	return (
		<>
	
		<button type="button" className="btn btn-outline-info px-3 py-1 ms-2 fw-bolder" data-bs-toggle="modal" data-bs-target="#loginModal">
		  <span className="fa fa-laptop me-2"></span>LOGIN
		</button>
	
		<div className="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
		  <div className="modal-dialog">
		    <div className="modal-content">
		      <div className="modal-header">
		        <h5 className="modal-title" id="exampleModalLabel">Login</h5>
		        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
		      </div>
		      <div className="modal-body">
		      	<button className="btn btn-primary w-100 mb-4">
		      		<span className="fa fa-google me-2"></span>Sign in With Google
		      	</button>
		      	<button className="btn btn-primary w-100 mb-4">
		      		<span className="fa fa-facebook me-2"></span>Sign in With Facebook
		      	</button>
		      	<p className="mx-auto text-center"><hr/>OR</p>
		        <form onSubmit={handleSubmit}>
		          <div className="mb-3">
		            <label for="exampleInputEmail1" className="form-label">Email address</label>
		            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
		            name="email"
		            value={user.email}
		            onChange={handleChange}/>
		            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
		          </div>
		          <div className="mb-3">
		            <label for="exampleInputPassword1" className="form-label">Password</label>
		            <input type="password" className="form-control" id="exampleInputPassword1" 
		            name="password"
		            value={user.password}
		            onChange={handleChange}/>
		          </div>
		          <div className="mb-3 form-check">
		            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
		            <label className="form-check-label" for="exampleCheck1">Remember Me</label>
		          </div>
		          <button type="submit" className="btn btn-outline-primary w-100 mt-3" >Submit</button>
		        </form>
		      </div> 
		    </div>
		  </div>
		</div>

		</>
		)
}


export default Login;