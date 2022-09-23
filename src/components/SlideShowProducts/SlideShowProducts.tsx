import React from 'react';
import { Slide } from 'react-slideshow-image';

export interface SlideShowProductsInterface {
	images: string[];
}

const SlideShowProducts: React.FC<SlideShowProductsInterface> = ({ images }) => {
	return (
		<Slide easing="ease" duration={3000} indicators={true}>
			{images.map((image, index) => {
				const url = `/products/${image}`;
				return (
					<div key={index} className="each-slide">
						<div style={{ backgroundImage: `url(${url})`, backgroundSize: 'cover',backgroundRepeat: "no-repeat" }} />
					</div>
				);
			})}
		</Slide>
	);
};

export default SlideShowProducts;
