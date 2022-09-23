import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import NextLink from 'next/link';
import Link from '@mui/material/Link';

export interface OrdersCartInterface {
	isSumary?: boolean;
}

const OrdersCart: React.FC<OrdersCartInterface> = ({ isSumary = false }) => {
	return (
		<Card
			sx={{
				boxShadow: 4,
			}}
			className="sumary-card">
			<CardContent>
				<Box sx={{ my: 1 }} display="flex" justifyContent="space-between">
					<Typography fontWeight={700} variant="h2" component="h2">
						Dirección de Envío
					</Typography>
					{isSumary && (
						<Button variant="text" color="secondary">
							<NextLink passHref href={'/checkout/address'}>
								<Link color="secondary" fontSize={15} underline="always">
									Editar
								</Link>
							</NextLink>
						</Button>
					)}
				</Box>
				<Divider />

				<Grid container>
					<Grid item xs={12} sx={{ mb: 2 }} />

					<Grid item xs={6}>
						<Typography>No. Productos</Typography>
					</Grid>
					<Grid item xs={6} display={'flex'} justifyContent={'end'}>
						<Typography>3 items </Typography>
					</Grid>

					<Grid item xs={6}>
						<Typography>SubTotal</Typography>
					</Grid>
					<Grid item xs={6} display={'flex'} justifyContent={'end'}>
						<Typography>$155.36 </Typography>
					</Grid>

					<Grid item xs={6}>
						<Typography>{`Impuestos(15%)`}</Typography>
					</Grid>
					<Grid item xs={6} display={'flex'} justifyContent={'end'}>
						<Typography>$35.34 </Typography>
					</Grid>

					<Grid item xs={12} sx={{ mb: 2 }} />
					<Grid item xs={6}>
						<Typography variant="subtitle1">Total</Typography>
					</Grid>
					<Grid item xs={6} display={'flex'} justifyContent={'end'}>
						<Typography variant="subtitle1">$186.34</Typography>
					</Grid>
				</Grid>
				{!isSumary && (
					<Box sx={{ mt: 2 }}>
						<Button color="secondary" fullWidth className="circular-btn">
							Checkout
						</Button>
					</Box>
				)}
			</CardContent>
		</Card>
	);
};

export default OrdersCart;
