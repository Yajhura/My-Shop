import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import { Product } from '@/interface';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useState, useMemo } from 'react';
import Link from 'next/link';

const CardProduct = ({ images, title, price }: Product) => {
	const [isHovered, setIsHovered] = useState(false);

	const hoveredImage = useMemo(() => {
		return isHovered ? `products/${images[1]}` : `products/${images[0]}`;
	}, [isHovered, images]);

	return (
		<Link passHref href={`/product/slug`} prefetch={false}>
			<Grid className="fadeIn" item xs={12} sm={6} md={4} lg={3}>
				<Card>
					<CardActionArea
						onMouseEnter={() => setIsHovered(true)}
						onMouseLeave={() => setIsHovered(false)}>
						<CardMedia alt={title} component="img" image={hoveredImage} />
					</CardActionArea>
				</Card>
				<Box sx={{ mt: 1 }}>
					<Typography fontWeight={700} variant="body1">
						{title}
					</Typography>
					<Typography sx={{ color: 'text.secondary' }} variant="body2" component="p">
						${price}
					</Typography>
				</Box>
			</Grid>
		</Link>
	);
};

export default CardProduct;
