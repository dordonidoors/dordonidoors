import React from 'react';
import PropTypes from 'prop-types'
import { ToastContainer, toast } from 'react-toastify';

// validation
import validateContactUsForm from '../../validation';

import 'react-toastify/dist/ReactToastify.css';
import './ContactUs.scss';

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
			<section id='contact-us' ref={this.props.refProp} className='section is-medium' style={{textAlign: 'left'}}>
				<ToastContainer style={{color: 'white', textShadow: '!important'}} position={toast.POSITION.BOTTOM_RIGHT}/>
				<div className='container'>
					<div className='columns'>
						<div className='column is-half'>
							<h1 className='title is-2'>Request a Quote</h1>

							<p className='content is-medium'>
								Please take a moment to fill in the form to receive custom pricing.
								We will get back to you within 24 hours of receiving your message. Thank you.
							</p>

							<p className='content is-medium'>
								You may also contact us by:
							</p>
							<ul>
								<li>
									<span><i className='fas fa-phone'></i><strong>&nbsp;(714) 777-7777</strong></span>
								</li>
								<li>
									<span><i className='fas fa-envelope'></i><strong>&nbsp;dordonidoors@gmail.com</strong></span>
								</li>
							</ul>
						</div>
						<div className='column is-half'>
							<form onSubmit={this.handleSubmit.bind(this)}>
								<div className='field'>
									<label className='label'>Name</label>
									<div className='control'>
										<input name='name' className='input' type='text' placeholder='Please enter your name...' />
									</div>
								</div>
								<div className='field'>
									<label className='label'>Email</label>
									<div className='control'>
										<input name='email' className='input' type='email' placeholder='Please enter your email...' />
									</div>
								</div>
								<div className='field'>
									<label className='label'>Message</label>
									<div className='control'>
										<textarea name='message' className='textarea' placeholder='Please enter your message...'></textarea>
									</div>
								</div>
								<div className='field'>
									<p className='control'>
										<button type='submit' className='button is-success'>
											Send
										</button>
									</p>
								</div>
							</form>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default ContactUs;
