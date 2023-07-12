import React, { useContext } from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Wait from '../components/Wait'
import Start from '../components/Start'
import Features from '../components/Features'
import Questions from '../components/Questions'
import Credit from '../components/Credit'
import Footer from '../components/Footer'
import Featured from '../components/Featured'
import Testimonials from '../components/Testimonials'
import Slider from '../components/Slider'
import { themeContext } from '../Context/ThemeContext'

export default function Home() {
	const { theme } = useContext(themeContext)
	const themeStyles = {
		backgroundColor: theme ? "white" : "black",
	};
  return (
		<div style={themeStyles} >
			<Navbar />
			<Header />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<Wait />
			<Start />
			<Features />
      <Slider/>
      <Testimonials/>
			<Questions />
			<Featured heading={"We’ve Been Featured In"} />

			<Credit />
			<Featured heading={"Our partners"} />
			<br />
			<br />
			<br />
			<Footer />
		</div>
  );
}
