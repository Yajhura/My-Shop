import { ListCart, OrdersCart } from '@/components';
import { MainLayout } from '@/layout';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const index = () => {
	return (
		<MainLayout
			title="Carrito de Compras"
			description="articulos agregados al carrito de compras">
			<Typography 
             mb={2}
            variant="h1" component="h1">
				Carrito
			</Typography>
			<Grid container spacing={3}>
				<Grid item xs={12} md={7}>
					<ListCart />
				</Grid>
				<Grid item xs={12} md={5}>
					<OrdersCart />
				</Grid>
			</Grid>
		</MainLayout>
	);
};
export default index;
