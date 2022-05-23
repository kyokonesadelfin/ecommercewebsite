import React from 'react';
import { NavLink } from 'react-router-dom';
import Login from './Login'
import Signup from './Signup'
import CartBtn from './CartBtn'




const Navbar = (props) => {
	

	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top py-3 shadow-lg mb-5 pb-2" >
			  <div className="container-fluid mx-2" id="navbar">
			    <NavLink className="navbar-brand fw-bolder fs-4" to="/" id="main">HIGH-TECH HUB STORE</NavLink>
			    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			      <span className="navbar-toggler-icon"></span>
			    </button>
			    <div className="collapse navbar-collapse" id="navbarSupportedContent">
			      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
			        <li className="nav-item">
			          <NavLink className="nav-link active" aria-current="page" to="/" id="link">Home</NavLink>
			          </li>
			        <li className="nav-item">
			          <NavLink className="nav-link" to="/products" id="link">Products</NavLink>
			        </li>
			        <li className="nav-item">
			          <NavLink className="nav-link" to="/about" id="link">About</NavLink>
			        </li>
			        <li className="nav-item">
			          <NavLink className="nav-link" to="/contact" id="link">Contact</NavLink>
			        </li>
			      </ul>			
			    </div>
			       {props.auth ?
			       			<>
			       			<Signup/>
			       			<Login/>
			         		<CartBtn/>
			         		</>
			         		:
			         		<>
			         		<NavLink to="/dashboard" className="nav-link fw-bolder">
			         		<i className="fa fa-folder-open me-2"></i>Admin Dashboard</NavLink>
			         		<NavLink to="/logout" className="nav-link fw-bolder">
			         		<i className="fa fa-sign-out me-2"></i>Logout</NavLink>
			         		<CartBtn/>
			         		</>

			    	}
			  </div>
			</nav>
		</div>
		);
}


export default Navbar;