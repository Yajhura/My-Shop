import { initialData } from '@/database';
import React from 'react';
import NextLink from 'next/link';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { ComponentCounter } from '@/components/ComponentCounter';

const data = [initialData.products[0], initialData.products[1], initialData.products[2]];

export interface ListCartInterface {
	editable?: boolean;
}

const ListCart: React.FC<ListCartInterface> = ({ editable = true }) => {
	return (
		<>
			{data.map((product) => (
				<Grid container spacing={3} sx={{ my: 1 }} key={product.slug}>
					<Grid item xs={3}>
						<NextLink href={'/product/slug'}>
							<Link>
								<CardActionArea>
									<CardMedia
										image={`/products/${product.images[0]}`}
										component="img"
										sx={{ borderRadius: 5 }}
									/>
								</CardActionArea>
							</Link>
						</NextLink>
					</Grid>

					<Grid item xs={7}>
						<Box display={'flex'} flexDirection={'column'}>
							<Typography variant="body1"> {product.title}</Typography>
							<Typography variant="body2">
								Talla: <strong>M</strong>
							</Typography>

							{editable ? (
								<>
									<Box sx={{ mb: 2 }} />
									<ComponentCounter />
								</>
							) : (
								<Typography variant="body2">Cantidad: 1</Typography>
							)}
						</Box>
					</Grid>

					<Grid display={'flex'} flexDirection={'column'} alignItems={'center'} item xs={2}>
						<Typography variant="subtitle1" color="primary">
							${product.price}
						</Typography>
						{editable && (
							<Button sx={{ mt: 1 }} variant="text" color="secondary">
								Remover
							</Button>
						)}
					</Grid>
				</Grid>
			))}
		</>
	);
};

export default ListCart;
