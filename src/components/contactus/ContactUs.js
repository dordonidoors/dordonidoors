import React from 'react';
import PropTypes from 'prop-types'
import { ToastContainer, toast } from 'react-toastify';

// validation
import validateContactUsForm from '../../validation';

import 'react-toastify/dist/ReactToastify.css';

class ContactUs extends React.Component {
	constructor(props) {
		super(props);
		this.handleSubmit.bind(this);
	}
	componentDidMount() {
		window.scrollTo(0,0);
	}
	handleSubmit(event) {
		event.preventDefault();
		var frm = event.target;

		if (validateContactUsForm(frm)) {
			var name = frm.name.value;
			var email = frm.email.value;
			var message = frm.message.value;

			fetch(`https://us-central1-dordonidoors-e0b15.cloudfunctions.net/sendMail?name=${name}&email=${email}&message=${message}`)
				.then(res => res.json())
				.then(
					(result) => {
						console.log(result);
					}
				)

			toast('Message sent', {type: toast.TYPE.SUCCESS});
		}
		else {
			toast('Invalid input', {type: toast.TYPE.ERROR});
		}

	}
	render () {
		return (
			<div>
				<ToastContainer style={{color: 'white', textShadow: '!important'}} position={toast.POSITION.BOTTOM_RIGHT}/>
				<div className='static-section content' style={{height: '100vh'}}>
					<h1>Contact Us!</h1>


					<h5>Have a question about our services? We'd love to here from you. Send us a message and we'll respond as soon as we can!</h5>

					<div style={{
						margin: '0 auto',
						padding: '20px'
					}} className='container'>
						<form onSubmit={this.handleSubmit}>
							<div className='form-group' style={{textAlign: 'left'}}>
								<label>Name</label>
								<input name='name' className='form-control'/>
							</div>
							<div className='form-group' style={{textAlign: 'left'}}>
								<label>Email</label>
								<input name='email' type='email' className='form-control' />
							</div>
							<div className='form-group'style={{textAlign: 'left'}}>
								<label>Message</label>
								<textarea name='message' className='form-control' rows='10'>
								</textarea>
							</div>
							<button type='submit' className='btn btn-primary'>Submit</button>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default ContactUs;
