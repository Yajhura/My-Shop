import React from 'react';
import Box from '@mui/material/Box';
import Head from 'next/head';

export interface AuthLayoutInterface {
	children: React.ReactNode;
	title: string;
}

const AuthLayout: React.FC<AuthLayoutInterface> = ({ title, children }) => {
	return (
		<>
			<Head>
				<title>{title}</title>
			</Head>

			<main>
				<Box 
			        
					display="flex"
					flexDirection="column"
					alignItems="center"
					justifyContent="center"
					height="calc(100vh - 200px)">
					{children}
				</Box>
			</main>
		</>
	);
};

export default AuthLayout;
