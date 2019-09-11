import React, { useRef, useState } from 'react';

// css
import './App.scss';

// components
import TopBar from './components/topbar/TopBar';
import Home from './components/home/Home';
import AboutUs from './components/aboutus/AboutUs';
import Services from './components/services/Services';
import Footer from './components/footer/Footer';
import ContactUs from './components/contactus/ContactUs';
import Gallery from './components/gallery/Gallery';
import { scrollToRef } from './components/scrollToRef/scrollToRef';
import Navbar from './components/navbar/Navbar';
// import Services from './components/services/Services';
// import Gallery from './components/gallery/Gallery';

const App = () => {
	const [navbarState, setNavbarState] = useState({isCollapsed: true});
	const homeRef = useRef(null);
	const aboutRef = useRef(null);
	const servicesRef = useRef(null);
	const galleryRef = useRef(null);
	const contactRef = useRef(null);

	return(
		<div className="App">
			<TopBar />
			<Navbar
				homeRef={homeRef}
				aboutRef={aboutRef}
				servicesRef={servicesRef}
				galleryRef={galleryRef}
				contactRef={contactRef}/>

			<Home
				refProp={homeRef}
				refPropContact={contactRef}/>
			<AboutUs
				refProp={aboutRef}/>
			<Services
				refProp={servicesRef}/>
			<Gallery
				refProp={galleryRef}/>
			<ContactUs
				refProp={contactRef}/>

			<Footer />
		</div>
	);
};

export default App;
