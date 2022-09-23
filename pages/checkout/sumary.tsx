import { ListCart, OrdersCart } from '@/components';
import { MainLayout } from '@/layout';
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
import InfoEntrega from '../../src/components/Checkout/InfoEntrega/InfoEntrega';

const Sumary = () => {
	return (
		<MainLayout title="Resumen de la orden" description="">
			<Typography variant="h1" component="h1">
				Resumen de la orden
			</Typography>

			<Typography mb={2} variant="h6" component="h6">
				3 productos seleccionados
			</Typography>

			<Grid container spacing={3}>
				<Grid item xs={12} md={7}>
					<ListCart />
				</Grid>
				<Grid item xs={12} md={5}>
					<OrdersCart isSumary={true} />

					<Box sx={{ mt: 2 }} />

					<InfoEntrega />

					<Box sx={{ mt: 2 }} display="flex" justifyContent="flex-end" alignItems="center">
						<Button
							sx={{
								width: {
									xs: '100%',
									md: 'auto',
								},
							}}
							size="large"
							color="secondary"
							className="circular-btn">
							Confirmar Ordena
						</Button>
					</Box>
				</Grid>
			</Grid>
		</MainLayout>
	);
};
export default Sumary;
