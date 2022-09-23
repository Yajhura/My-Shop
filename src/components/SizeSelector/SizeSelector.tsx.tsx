import { ValidSize } from '@/interface';
import React from 'react';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';

export interface SizeSelectorInterface {
	selectedSize: ValidSize;
	sizes: ValidSize[];
}

const SizeSelector: React.FC<SizeSelectorInterface> = ({ selectedSize, sizes }) => {
	// const variant = `${selectedSize === sizes ? 'contained' : 'outlined'}`

	return (
		<Box
			sx={{
				mt: 2,
			}}>
			{sizes.map((size, index) => {
				return (
					<Button
						key={index}
						size="small"
						color={`${selectedSize === size ? 'primary' : 'info'}`}
						sx={{ mr: 1 }}>
						{size}
					</Button>
				);
			})}
		</Box>
	);
};

export default SizeSelector;
