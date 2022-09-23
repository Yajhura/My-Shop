import { MainLayout } from '@/layout';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { generatorID } from '../../src/utils/generatorId';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const ListFormLabels = [
	{
		label: 'Nombre',
	},
	{
		label: 'Apellido',
	},
	{
		label: 'Dirección',
	},
	{
		label: 'Dirección 2(opcional)',
	},
	{
		label: 'Código Postal',
	},
	{
		label: 'Ciudad',
	},
	{
		label: 'Teléfono',
	},
	{
		label: 'País',
	},
];

const AddressPage = () => {
	return (
		<MainLayout title="Dirección" description="Confirma la dirección del destino">
			<Typography sx={{ mb: 2 }} component="h1" variant="h1">
				Dirección
			</Typography>

			<Grid container spacing={2}>
				{ListFormLabels.map((item) => {
					return (
						<>
							{item.label !== 'País' ? (
								<Grid key={generatorID()} item xs={12} md={6}>
									<TextField fullWidth label={item.label} variant="filled" />
								</Grid>
							) : (
								<Grid key={generatorID()} item xs={12} md={6}>
									<FormControl fullWidth>
										<Select variant="filled" label="País" value={1}>
											<MenuItem value={1}>Peru</MenuItem>
											<MenuItem value={2}>Argentina</MenuItem>
											<MenuItem value={3}>Colombia</MenuItem>
										</Select>
									</FormControl>
								</Grid>
							)}
						</>
					);
				})}
			</Grid>

			<Box display="flex" justifyContent="flex-end" sx={{ mt: 2 }}>
				<Button size="large" className="circular-btn" variant="contained" color="secondary">
					Revisar Pedidos
				</Button>
			</Box>
		</MainLayout>
	);
};
export default AddressPage;
