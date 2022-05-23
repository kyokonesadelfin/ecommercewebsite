import React from 'react';
import DATA from '../../Data';
import { NavLink } from 'react-router-dom';
import axios from 'axios';



const Inventory = () => {


	const postDelete = (id, e) => {
		
		axios.delete(DATA.id).then(res => console.log('Deleted!', res)).catch(err => console.log(err))
	}

	const table = (items) => {
		return (
			<div className="table-responsive">
			  <table className="table table-striped table-sm">
			    <thead>
			      <tr>
			      	<th scope="col">id#</th>
			        <th scope="col">image</th>
			        <th scope="col">stocks</th>
			        <th scope="col">name</th>
			        <th scope="col">price</th>
			        <th scope="col">description</th>
			      </tr>
			    </thead>
			    <tbody>
			      <tr>
			      	<td>{items.id}</td>
			        <td><img src={items.image} alt="" height="200px" width="200px" /></td>
			        <td>{items.stocks}</td>
			        <td>{items.title}</td>
			        <td>{items.price}</td>
			        <td width="200px">{items.desc}</td>
			        <td><button type="button" className="btn btn-outline-danger px-3 py-1 ms-2 fw-bolder" onClick={postDelete(items.id)}>Delete</button></td>
			        <td><button type="button" className="btn btn-outline-dark px-3 py-1 ms-2 fw-bolder" onClick={postDelete(items.id)}>Edit</button></td>
			      </tr>       
			    </tbody>
			  </table>
			</div>

			)
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
			              <i className="fa fa-file-o me-2"></i>
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
			            <NavLink className="nav-link" to="/orders">
			              <i className="fa fa-cart-arrow-down me-2"></i>
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

			      <h2>Products</h2>
			      {DATA.map(table)}
			    </main>
			  </div>
			</div>
		</div>
		);
}


export default Inventory;