import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import RemoveShoppingCartOutlinedIcon from '@mui/icons-material/RemoveShoppingCartOutlined';
import { MainLayout } from '@/layout';
import NextLink from 'next/link';
import Link from '@mui/material/Link';
const empty = () => {
	return (
		<MainLayout
			title="Carrito vacío"
			description="No hay artículos en el carrito de compras">
			<Box
				display="flex"
				alignItems="center"
				justifyContent="center"
				sx={{
					height: 'calc(100vh - 200px)',
					flexDirection: {
						xs: 'column',
						sm: 'row',
					},
				}}>
				<RemoveShoppingCartOutlinedIcon sx={{ fontSize: 100 }} />

				<Box display="flex" flexDirection="column" alignItems="center">
					<Typography variant="body2">No hay productos en el carrito</Typography>
					<NextLink href="/" passHref>
						<Link typography="h4" color={'secondary'}>
							Volver al inicio
						</Link>
					</NextLink>
				</Box>
			</Box>
		</MainLayout>
	);
};
export default empty;
