import React, { useContext, useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import CasesCard from "./CasesCard";
import { casesData } from "./Casesdata";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { themeContext } from "../Context/ThemeContext";

SwiperCore.use([Navigation]);

export default function Slider() {
	const { theme } = useContext(themeContext);
	const themeStyles = {
		backgroundColor: theme ? "#F8F8F8" : "black",
	};

	const [activeSlide, setActiveSlide] = useState(2);
	const activeSlideStyle1 = {
		border: activeSlide === 1 ? "3px solid rgb(0,37,99)" : "",
	};
	const activeSlideStyle2 = {
		border: activeSlide === 2 ? "3px solid rgb(0,37,99)" : "",
	};
	const swiperRef = useRef(null);

	const handlePrevSlide = () => {
		if (swiperRef.current.swiper.isBeginning) {
			setActiveSlide(2);
		}
		if (swiperRef.current && swiperRef.current.swiper) {
			swiperRef.current.swiper.slidePrev();
		}
	};

	const handleNextSlide = () => {
		if (swiperRef.current.swiper.isEnd) {
			setActiveSlide(1);
		}
		if (swiperRef.current && swiperRef.current.swiper) {
			swiperRef.current.swiper.slideNext();
		}
	};

	const elements = casesData.map((info, index) => (
		<SwiperSlide key={info.id * index}>
			<CasesCard
				themeStyles={themeStyles}
				img={info.img}
				text={info.text}
			/>
		</SwiperSlide>
	));

	const swiperBreakpoints = {
		// Extra small screens (up to 576px)
		576: {
			slidesPerView: 1,
		},
		// Small screens (between 576px and 768px)
		768: {
			slidesPerView: 2,
		},
		// Medium screens (between 768px and 992px)
		992: {
			slidesPerView: 2.2,
		},
		// Large screens (between 992px and 1200px)
		1200: {
			slidesPerView: 3,
		},
		// Extra large screens (above 1200px)
		1201: {
			slidesPerView: 3.2,
		},
	};

	return (
		<>
			<div style={themeStyles} className="cases-container">
				<section className="cases">
					<h2>Resellme's Use Cases</h2>
					<div className="swiper-container">
						<Swiper
							ref={swiperRef}
							breakpoints={swiperBreakpoints}
							spaceBetween={-60}
						>
							{elements}
						</Swiper>
					</div>
					<div className="button-containers">
						<div
							style={activeSlideStyle1}
							className="arrow-container"
						>
							<FaArrowLeft
								color={`${
									activeSlide === 1 ? "rgb(0,37,99)" : "grey"
								}`}
								className="swiper-button-prev"
								onClick={handlePrevSlide}
							/>
						</div>
						<div
							style={activeSlideStyle2}
							className="arrow-container"
						>
							<FaArrowRight
								color={`${
									activeSlide === 2 ? "rgb(0,37,99)" : "grey"
								}`}
								className="swiper-button-next"
								onClick={() => {
									handleNextSlide();
									// handleSlideChange()
								}}
							/>
						</div>
					</div>
				</section>
			</div>
		</>
	);
}
