import { createTheme } from '@mui/material/styles';

export const darkTheme = createTheme({
	palette: {
		mode: 'dark',
		primary: {
			main: '#1E1E1E',
			light: '#fff',
		},
		secondary: {
			main: '#3A64D8',
		},
		info: {
			main: '#fff',
		},
	
	},
	components: {
		MuiLink: {
			defaultProps: {
				underline: 'none',
			},
		},
		MuiAppBar: {
			defaultProps: {
				elevation: 0,
				position: 'fixed',
			},
			styleOverrides: {
				root: {
					backgroundColor: '#121212',
					height: 60,
				},
			},
		},

		MuiTypography: {
			styleOverrides: {
				h1: {
					fontSize: 30,
					fontWeight: 600,
				},
				h2: {
					fontSize: 20,
					fontWeight: 400,
				},
				subtitle1: {
					fontSize: 18,
					fontWeight: 600,
				},
			},
		},

		MuiButton: {
			defaultProps: {
				variant: 'contained',
				size: 'small',
				disableElevation: true,
			},
			styleOverrides: {
				root: {
					textTransform: 'none',
					boxShadow: 'none',
					color: '#fff',
					backgroundColor: '#1E1E1E',
					borderRadius: 10,
					':hover': {
						backgroundColor: '#3A64D8',
						transition: 'all 0.3s ease-in-out',
					},
				},
			},
		},

		MuiCard: {
			defaultProps: {},
			styleOverrides: {
				root: {
					backgroundColor: '#1E1E1E',
				},
			},
		},
	},
});
