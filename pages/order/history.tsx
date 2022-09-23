import { MainLayout } from '@/layout';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridCellParams } from '@mui/x-data-grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Chip from '@mui/material/Chip';
import NextLink from 'next/link';

const History = () => {
	const columns: GridColDef[] = [
		{
			field: 'id',
			headerName: 'ID',
			filterable: false,
			sortable: false,
			width: 70,
		},
		{
			field: 'fullName',
			headerName: 'Full Name',
			flex: 1,
		},
		{
			field: 'paid',
			headerName: 'Pagada',
			flex: 1,
			renderCell: (params: GridCellParams) => (
				<>
					{params.row.paid ? (
						<Chip label="Pagada" variant='outlined' color="success" size="small" />
					) : (
						<Chip label="No Pagada" variant='outlined' color="error" size="small" />
					)}
				</>
			),
		},

		{
			field: 'ver',
			headerName: 'Ver orden',
			flex: 1,
			renderCell: (params: GridCellParams) => (
				<>
					<NextLink href={`/order/${params.row.id}`} passHref>
						<Link color="primary" underline="always">
							Ver
						</Link>
					</NextLink>
				</>
			),
		},
	];

	const rows = [
		{
			id: 1,
			fullName: 'John Doe',
			paid: false,
		},
		{
			id: 2,
			fullName: 'Fernando Doe',
			paid: true,
		},
		{
			id: 3,
			fullName: 'Auth Doe',
			paid: false,
		},
		{
			id: 4,
			fullName: 'John Doe',
			paid: true,
		},
		{
			id: 5,
			fullName: 'John Doe',
			paid: false,
		},
	];

	return (
		<MainLayout title="Historial de pedidos" description="Historial de pedidos">
			<Typography variant="h1" component="h1">
				Historial de pedidos
			</Typography>
			<Box my={5} width="100%" height={371} display="flex" justifyContent="center">
				<DataGrid rows={rows} columns={columns} />
			</Box>
		</MainLayout>
	);
};
export default History;
