import React from 'react';
import { NavLink } from 'react-router-dom';
import DATA from '../Data';


const Products = () => {



	const cardItem = (item) => {

		return(
			
			<div className="card mx-3 my-5 py-3 px-2" key={item.id} style={{width: "15rem"}} id="cards">
						<img src={item.image} className="card-img-top" alt={item.title} />
						<div className="card-body text-center">
							<h5 className="card-title fw-bolder" id="para">{item.title}</h5>
							<p className="lead fw-bold" id="para">${item.price}</p>
							<NavLink to={`products/${item.id}`} className="btn btn-outline-danger fw-bolder px-2"id="para" ><i className="fa fa-shopping-cart me-1"></i>Buy Now</NavLink>
	
						</div>
					</div>		
			);
	}



	return (
		<div>
			<div className="container py-2 mt-5 pt-5">
				<div className="row">
					<div className="col-12 text-center">
						<h1 className="display-6 fw-bolder text-center" id="late">Latest Collections</h1>

						<hr/>
					</div>
				</div>
			</div>
			<div className="container" id="products">
				<div className="row justify-content-around">
					{DATA.map(cardItem)}
				</div>
			</div>
		</div>
		);
}


export default Products;