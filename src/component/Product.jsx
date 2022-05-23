import React from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import DATA from '../Data';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, delItem } from '../redux/actions/index'
import { NavLink } from 'react-router-dom';
import Swal from 'sweetalert2';





const Product = (props) => {

	const [cartBtn, setCartBtn] = useState("Add to Cart")
	


	const proid = useParams();
	const proDetail = DATA.filter(x=>x.id == proid.id)
	const product = proDetail[0];
	console.log(product);

	const dispatch = useDispatch()


	const handleCart = (product) => {
		if (cartBtn === "Add to Cart") {
			dispatch(addItem(product))
			setCartBtn("Remove from Cart")
			Swal.fire({
			  position: 'top-end',
			  icon: 'success',
			  title: 'Yay! Added to Cart.',
			  showConfirmButton: false,
			  timer: 1200
			})

		} else {
			dispatch(delItem(product))
			setCartBtn("Add to Cart")
		}
	}



	return (
		<>
		<div className="container my-5 py-3 mx-5 px-5 mt-5 pt-5">
			<div className="row">
				<div className="col-md-6 d-flex justify-content-center mx-auto product">
					<img src={product.image} alt={product.title} height="275px"/>
				</div>
				<div className="col-md-6 d-flex flex-column justify-content-center">
					<h1 className="display-9" id="prod">{product.title}</h1>
					<hr/>
					<h2 className="my-2 text-danger" id="prod">${product.price}</h2>
					<p className="lead fw-bold" id="prod">{product.desc}</p>
					<button onClick={()=>handleCart(product)} className="btn btn-primary my-3">{cartBtn}</button>
					<NavLink to="/cart" className="btn btn-outline-primary ">Go to Cart</NavLink>
				</div>
			</div>
		</div>
		</>
		);
}


export default Product;