import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';


const Addproduct = () => {

	const [product, addproduct] = useState({
		title: '',
		price: '',
		desc: '',
		image: '',
		stock: ''
	});

	const handleChange = (event) =>{
		let name = event.target.name
		let value = event.target.value

		addproduct({...product, [name]:value})
	}



	const handleSubmit = async (event) =>{
		event.preventDefault();
		const { title, price, desc, image, stocks} = product;
		try {
				 await fetch('/products/addProduct', {
				method : "POST",
				headers : {
					"Content-Type" : "application/json"
				},
				body : JSON.stringify({
				 title, price, desc, image, stocks
				})
			});

			if(!title || !price || !desc || !stocks === 0){
				window.alert("Product not added.")
			} else {
				window.alert("Product added.")
				window.location.reload();
				
			}

		} catch (error) {
			console.log(error);

		} 

	
	}


	return (
		<div>

			<div className="container-fluid mt-5 pt-5">
			  <div className="row">
			    <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
			      <div className="position-sticky pt-3">
			        <ul className="nav flex-column">
			          <li className="nav-item">
			            <NavLink className="nav-link active" aria-current="page" to="/dashboard">
			              <i className="fa fa-home me-2"></i>
			              Dashboard
			            </NavLink>
			          </li>
			          <li className="nav-item">
			            <NavLink className="nav-link" to='/allProducts'>
			              <i className="fa fa-cart-arrow-down me-2"></i>
			               All Products
			            </NavLink>
			          </li> 
			          <li className="nav-item">
			            <NavLink className="nav-link" to='/addProduct'>
			              <i className="fa fa-cart-arrow-down me-2"></i>
			               Add Product
			            </NavLink>
			          </li>
			          <li className="nav-item">
			            <NavLink className="nav-link" to="#">
			              <i className="fa fa-file-o me-2"></i>
			              Orders
			            </NavLink>
			          </li>
			          <li className="nav-item">
			            <NavLink className="nav-link" to="#">
			              <i className="fa fa-users me-2"></i>
			              Customers
			            </NavLink>
			          </li>
			          <li className="nav-item">
			            <NavLink className="nav-link" to="#">
			              <i className="fa fa-list-ul me-2"></i>
			              Reports
			            </NavLink>
			          </li>
			          <li className="nav-item">
			            <NavLink className="nav-link" to="#">
			              <i className="fa fa-database me-2"></i>
			              Integrations
			            </NavLink>
			          </li>
			        </ul>

			        <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
			          <span>Saved reports</span>
			          <NavLink className="link-secondary" to="#" aria-label="Add a new report">
			            <i className="fa fa-plus-square me-2"></i>
			          </NavLink>
			        </h6>
			        <ul className="nav flex-column mb-2">
			          <li className="nav-item">
			            <NavLink className="nav-link" to="#">
			              <i className="fa fa-calendar me-2"></i>
			              Current month
			            </NavLink>
			          </li>
			          <li className="nav-item">
			            <NavLink className="nav-link" to="#">
			              <i className="fa fa-calendar-check-o me-2"></i>
			              Last quarter
			            </NavLink>
			          </li>
			          <li className="nav-item">
			            <NavLink className="nav-link" to="#">
			              <i className="fa fa-comments me-2"></i>
			              Social engagement
			            </NavLink>
			          </li>
			          <li className="nav-item">
			            <NavLink className="nav-link" to="#">
			              <i className="fa fa-bar-chart me-2"></i>
			              Year-end sale
			            </NavLink>
			          </li>
			        </ul>
			      </div>
			    </nav>

			    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
			      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
			        <h1 className="h2">Dashboard</h1>
			        <div className="btn-toolbar mb-2 mb-md-0">
			          <div className="btn-group me-2">
			            <button type="button" className="btn btn-sm btn-outline-secondary">Share</button>
			            <button type="button" className="btn btn-sm btn-outline-secondary">Export</button>
			          </div>
			          <button type="button" className="btn btn-sm btn-outline-secondary dropdown-toggle">
			            <span data-feather="calendar"></span>
			            This week
			          </button>
			        </div>
			      </div>

			      <h2 className="d-flex justify-content-center mt-5 pt-2">Add Product</h2>
			      <div className="table-responsive m-5 p-4">
			      	<form onSubmit={handleSubmit} className="justify-content-center mb-5 p-3">
			      		<div className="mb-3 ">
			      		  <label for="formFile" className="form-label">Product Image:</label>
			      		  <input className="form-control" type="file" id="formFile" name="image" value={product.image} onChange={handleChange}/>
			      		</div>
			      	  <div className="mb-3">
			      	    <label for="exampleInputEmail1" className="form-label">Product Name:</label>
			      	    <input type="text" className="form-control" id="exampleInput" name="title" value={product.title} onChange={handleChange}/>
			      	  </div>
			      	  <div className="mb-3">
			      	    <label for="exampleFormControlTextarea1" className="form-label">Product Description:</label>
			      	    <textarea className="form-control" id="exampleFormControlTextarea1" rows="2" name="desc" value={product.desc} onChange={handleChange}></textarea>
			      	  </div>
			      	  <label for="price" className="form-label">Price:</label>
			      	  <div className="input-group mb-3">
			      	    <span className="input-group-text">$</span>
			      	    <input type="text" className="form-control" aria-label="Dollar amount (with dot and two decimal places)" name="price" value={product.price} onChange={handleChange}/>
			      	  </div>
			      	<div className="mb-3">
			      	  <label for="exampleInputEmail1" className="form-label">Stocks:</label>
			      	  <input type="text" className="form-control" id="exampleInput" name="stocks" value={product.stocks} onChange={handleChange}/>
			      	</div>
			      	  <button type="submit" className="btn btn-primary mb-3 mt-3 px-5">Save</button>
			      	</form>
			      </div>
			    </main>
			  </div>
			</div>
		</div>


				

		);
}


export default Addproduct;