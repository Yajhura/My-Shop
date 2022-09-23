import { MainLayout } from '@/layout';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { initialData } from '@/database';
import Button from '@mui/material/Button';
import { Chip } from '@mui/material';
import { SlideShowProducts } from '@/components/SlideShowProducts';
import { ComponentCounter } from '@/components/ComponentCounter';
import { SizeSelector } from '@/components/SizeSelector';

const producto = initialData.products[0];

const ProductPage = () => {
	return (
		<MainLayout title={`${producto.title}`} description={`${producto.description}`}>
			<Grid container spacing={3}>
				<Grid item xs={12} md={7}>
					<SlideShowProducts images={producto.images} />
				</Grid>

				<Grid item xs={12} md={5}>
					<Box display="flex" flexDirection="column">
						
						<Typography component="h1" variant="h1">
							{producto.title}
						</Typography>
						<Typography component="p" variant="subtitle1">
							${producto.price}
						</Typography>

						<Box sx={{ my: 2 }}>
							<Typography variant="subtitle2">Cantidad</Typography>
							{/* item counter */}
							<ComponentCounter />
							<SizeSelector selectedSize={producto.sizes[0]} sizes={producto.sizes} />
						</Box>

						
						<Button color="secondary" fullWidth className="circular-btn">
							Agregar al carrito
						</Button>
						{/* <Chip label="No hay stock disponible " color="error" variant="outlined" /> */}
						{/* description */}
						<Box sx={{ mt: 3 }}>
							<Typography variant="subtitle2">Descripcion</Typography>
							<Typography variant="body2">{producto.description} </Typography>
						</Box>
					</Box>
				</Grid>
			</Grid>
		</MainLayout>
	);
};
export default ProductPage;
