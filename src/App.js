import React from 'react';

// css
import './App.scss';

// components
import TopBar from './components/topbar/TopBar';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import AboutUs from './components/aboutus/AboutUs';
import Services from './components/services/Services';
import Footer from './components/footer/Footer';
// import ContactUs from './components/contactus/ContactUs';
// import Services from './components/services/Services';
// import Gallery from './components/gallery/Gallery';


class App extends React.Component {
	constructor(props) {
		super(props);
	}
	render () {
		return(
			<div className="App">
				<TopBar />
				<Navbar />

				<Home />
				<AboutUs />
				<Services />

				<Footer />
			</div>
		);
	}
}
export default App;
