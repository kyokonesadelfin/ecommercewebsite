import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import Home from './Home';


const Logout = () => {

	const history = useHistory();

	const logout = async () => {
		try {
			const res = await fetch('https://whispering-gorge-87073.herokuapp.com/logout', {
				mode: 'no-cors',
				method : "GET",
				headers : {
					Accept : "application/json",
					"Content-Type" : "application/json"
				},
				credentials : "include"
			});

			if(res.status === 401 || !res){
				window.alert("Please Logout Later");
			} else{
				Swal.fire({
						icon: 'success',
						title: 'Logout Successful',
						text: 'You are now logged out.'
						}).then((result) => {
							if(result.isConfirmed){
							history.push('https://whispering-gorge-87073.herokuapp.com/');
							window.location.reload();
												
						}
					})
								
				
			}
		} catch (error) {
			console.log(error)

		}
	}

	useEffect(() => {
		logout(); 
	}, []);

	return (
		<div>
		<Home/>
		</div>
		);
}

export default Logout;