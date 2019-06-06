import React from 'react';
import logo from './logo.svg';
import {
	BrowserRouter as Router,
	Route,
	Link,
	Redirect,
	withRouter
} from 'react-router-dom';

// css
import './App.css';

// components
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import ContactUs from './components/contactus/ContactUs';
import Services from './components/services/Services';
import Gallery from './components/gallery/Gallery';
import Footer from './components/footer/Footer';

const NavbarWithRouter = withRouter(props => <Navbar {...props} />);

class App extends React.Component {
	constructor(props) {
		super(props);
	}
	render () {
		return(
			<div className="App">
				<Router>
					<NavbarWithRouter />

					<Route path='/home' component={Home} />
					<Route path='/contact' component={ContactUs} />
					<Route path='/services' component={Services} />
					<Route path='/gallery' component={Gallery} />
					<Route exact path='/' render={() => (
						<Redirect to='/home' />
					)}/>

					<Footer />
				</Router>
			</div>
		);
	}
}
export default App;
