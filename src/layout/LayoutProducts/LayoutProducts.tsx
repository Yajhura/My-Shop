import React from 'react';
import Grid from '@mui/material/Grid';

export interface LayoutProductsInterface {
	children: React.ReactNode;
}

const LayoutProducts: React.FC<LayoutProductsInterface> = ({ children }) => {
	return (
		<Grid container spacing={4}>
			{children}
		</Grid>
	);
};

export default LayoutProducts;
