import { MainLayout } from '@/layout/MainLayout';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SearchOffIcon from '@mui/icons-material/SearchOff';
import IconButton from '@mui/material/IconButton';
const CustomPage404 = () => {
	return (
		<MainLayout title="Page not found" description="No se encontro lo que buscabas">
			<Box
				display="flex"
				flexDirection="column"
				justifyContent="center"
				alignItems="center"
				height={'calc(100vh - 200px)'}>
				<Typography
					fontSize={70}
					component="h1"
					color="primary.light"
					fontWeight="bold"
					textAlign="center">
					404 - Page not found
				</Typography>

				<IconButton>
					<SearchOffIcon
						sx={{
							fontSize: 70,
						}}
					/>
				</IconButton>
			</Box>
		</MainLayout>
	);
};
export default CustomPage404;
