import { AuthLayout } from '@/layout';
import NextLink from 'next/link';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

const Login = () => {
	return (
		<AuthLayout title="Login">
			<Box sx={{ width: '400px', padding: '10px 20px' }}>
				<Typography fontWeight="bold" sx={{ mb: 2 }} align="left" component="h1" variant="h4">
					Iniciar Sesión
				</Typography>
				<Card
					sx={{
						boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.2)',
					}}>
					<CardContent>
						<Box display="flex" flexDirection="column">
							<TextField fullWidth label="Correo" variant="filled" sx={{ mb: 2 }} />
							<TextField fullWidth label="Contraseña" variant="filled" sx={{ mb: 2 }} />

							<Button fullWidth variant="contained" color="secondary" className="btn-s">
								Iniciar Sesión
							</Button>
							<NextLink href="/auth/register" passHref>
								<Link color="primary.light" underline="always">
									<Typography sx={{ mt: 2 }} align="left" variant="body2">
										¿No tienes una cuenta? Regístrate
									</Typography>
								</Link>
							</NextLink>
						</Box>
					</CardContent>
				</Card>
			</Box>
		</AuthLayout>
	);
};
export default Login;
