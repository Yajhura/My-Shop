import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import NextLink from 'next/link';
import Link from '@mui/material/Link';
export interface InfoEntregaInterface {}

const InfoEntrega: React.FC<InfoEntregaInterface> = () => {
	return (
		<Box
			sx={{
				mt: 2,
			}}>
			<Box sx={{ my: 1 }} display="flex" justifyContent="space-between">
				<Typography fontWeight={700} variant="h2" component="h2">
					Dirección de Envío
				</Typography>
				<Button variant="text" color="secondary">
					<NextLink passHref href={'/checkout/address'}>
						<Link color="secondary" fontSize={15} underline="always">
							Editar
						</Link>
					</NextLink>
				</Button>
			</Box>

			<Divider />
			<Grid container>
				<Grid item xs={12} sx={{ mb: 2 }} />
				<Grid item xs={6}>
					<Typography>Comprador</Typography>
				</Grid>
				<Grid item xs={6} display={'flex'} justifyContent={'end'}>
					<Typography noWrap>Fernando Herrera </Typography>
				</Grid>
				<Grid item xs={6}>
					<Typography>Dirección</Typography>
				</Grid>
				<Grid item xs={6} display={'flex'} justifyContent={'end'}>
					<Typography noWrap>323 Algún lugar </Typography>
				</Grid>
				<Grid item xs={6}>
					<Typography>Distrito</Typography>
				</Grid>
				<Grid item xs={6} display={'flex'} justifyContent={'end'}>
					<Typography noWrap>Carabayllo </Typography>
				</Grid>
				<Grid item xs={6}>
					<Typography>País</Typography>
				</Grid>
				<Grid item xs={6} display={'flex'} justifyContent={'end'}>
					<Typography noWrap>Canada </Typography>
				</Grid>
				<Grid item xs={6}>
					<Typography>Teléfono</Typography>
				</Grid>
				<Grid item xs={6} display={'flex'} justifyContent={'end'}>
					<Typography noWrap>+1 2321312 </Typography>
				</Grid>
				<Grid item xs={12} sx={{ mb: 2 }} />
			</Grid>
		</Box>
	);
};

export default InfoEntrega;
