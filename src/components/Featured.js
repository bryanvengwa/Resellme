import React, { useState } from 'react'
import FeatureCard from './FeatureCard';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

export default function Featured(props) {
          const data1 = ['tech.png' , 'mag.png','econet.png','netone.png']
          const data2 = ['cassava.png' , 'colors.png','eight.png','chat.png']
          const [active, setActive] = useState(true)
          const toggle = ()=>{
                    setActive(old=> !old)
          }
          const elements = data1.map((img , index)=>{
                    return <FeatureCard key={index} img={img} />;
          })
            const elements2 = data2.map((img , index) => {
				return <FeatureCard key={index} img={img} />;
			});

  return (
		<>
			<section className="featured">
				<h1>{props.heading}</h1>
				<div className="flex-container">
					{active && elements}
					{!active && elements2}
				</div>
				<div className="button-container">
					<button onClick={toggle}>
						{" "}
						<FaArrowLeft />{" "}
					</button>
					<button onClick={toggle}>
						{" "}
						<FaArrowRight />
					</button>
				</div>
			</section>
		</>
  );
}
