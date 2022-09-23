import Box from '@mui/material/Box';
import { MainLayout } from '@/layout';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Grid from '@mui/material/Grid';
import InfoEntrega from '../../src/components/Checkout/InfoEntrega/InfoEntrega';
import NextLink from 'next/link';
import Button from '@mui/material/Button';


const PagePay = () => {
	return (
		<MainLayout
			title={`Resumen de la orden 124124521`}
			description={`Resumen de la orden 124124521`}>
			<Typography variant="h1" component="h1">
				Orden: 124124521
			</Typography>

			<Box mt={2} width="100%" display="flex" flexDirection="column" alignItems="center">
				<Card
					sx={{
						boxShadow: '0px 0px 10px 2px #4caf50',
					}}
					className="sumary-card">
					<CardContent>
						<Box display="flex" my={2} flexDirection={'column'} justifyContent="center">
							<CheckCircleOutlineIcon
								sx={{
									fontSize: 50,
									color: '#4caf50',
									alignSelf: 'center',
									mb: 2,
								}}
							/>
							<Typography color="#4caf50" fontWeight={700} variant="h6" align="center">
								Orden Completado
							</Typography>
						</Box>
						<InfoEntrega />

						<Box mt={2} />

						<Box>
							<Box sx={{ my: 1 }} display="flex" justifyContent="space-between">
								<Typography fontWeight={700} variant="h2" component="h2">
									Dirección de Envío
								</Typography>
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
						</Box>
					</CardContent>
				</Card>
				<NextLink passHref href="/">
					<Button
						className="btn-s"
						sx={{
							mt: 5,
							width: {
								xs: '100%',
								sm: '100%',
								md: 'auto',
							},
						}}
						variant="contained"
						color="secondary"
						size="large">
						Volver a la tienda
					</Button>
				</NextLink>
			</Box>
		</MainLayout>
	);
};
export default PagePay;
