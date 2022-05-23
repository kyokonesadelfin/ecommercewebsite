import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { delItem } from '../redux/actions/index'
import { NavLink } from 'react-router-dom'



const Cart = () => {

	const state = useSelector((state)=> state.addItem)
	const dispatch = useDispatch()

	const handleClose = (item) => {
		dispatch(delItem(item))
	}

	var total = 0;
	const itemList = (item) => {
		total = total + item.price;
		return (
			<li className="list-group-item d-flex justify-content-between lh-sm">
			  <div>
			    <h6 className="my-0">{item.title}</h6>
			  </div>
			  <span className="text-muted">${item.price}</span>
			</li>
			);
	}

	const cartItems = (cartItem) => {
		return(

				<div className="px-2 my-5 mx-2 bg-light rounded-3" key={cartItem.id}>
					<div className="container py-2 pt-5">
				<h3> <span className="fa fa-shopping-cart me-1"> </span> Cart:</h3>
						<button onClick={()=>handleClose(cartItem)} type="button" className="btn-close float-end" aria-label="Close"></button>
						<div className="row justify-content-center">
							<div className="col-md-4">
								<img src={cartItem.image} alt={cartItem.title} height="100px" width="180px" />
							</div>
							<div className="col-md-4">
								<h3>{cartItem.title}</h3>
								<p className="lead fw-bold">${cartItem.price}</p>
							</div>
						</div>
					</div>
				</div>
					
				

			
			);
	}

	const emptyCart = () =>{
		return (
				<div className="px-4 my-5 bg-light rounded-3 py-5" >
					<div className="container py-4 mb-5" id="emptycart">
						<div className="row">
							<h3 className="py-4 my-5">Your Cart is Empty</h3>
						</div>
					</div>
				</div>
			);
	}


	const button = () => {
		return(
		<div className="container mb-5">
			<div className="row">
				<NavLink to="/checkout" className="btn btn-outline-dark mb-5 w-75 py-2 mx-auto fw-bold" id="checkout">PROCEED TO CHECKOUT</NavLink>
			</div>
		</div> 
			);
	}

	const subtotal = () => {
		return(
		<div className="container mb-4 py-4 px-2">
			<div className="row">
				<div className="col-8 mx-auto">
					<h4 className="d-flex justify-content-between align-items-center mb-3">
			          <span className="text-primary">Your cart</span>
			          <span className="badge bg-primary rounded-pill">{state.length}</span>
			        </h4>
			        <ul className="list-group mb-3">

			        	{state.map(itemList)} 
			         
			          <li className="list-group-item d-flex justify-content-between">
			            <span>Total (USD)</span>
			            <strong>${total}</strong>
			          </li>
			        </ul>		
			      	</div>
				</div>
		</div>
			);
	}

	return (
		<>

			{state.length === 0 && emptyCart()}
			{state.length !== 0 && state.map(cartItems)}
			{state.length !== 0 && subtotal()}
			{state.length !== 0 && button()}

			
		</>
		)

	}

export default Cart