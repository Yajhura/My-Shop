import React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import RemoveCircleOutline from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutline from '@mui/icons-material/AddCircleOutline';
import Typography from '@mui/material/Typography';

export interface ComponentCounterInterface {}

const ComponentCounter: React.FC<ComponentCounterInterface> = () => {
	return (
		<Box display="flex" alignItems="center">
			<IconButton>
				<RemoveCircleOutline />
			</IconButton>
			<Typography sx={{ mx: 1, width: 30, textAlign: 'center' }}> 1</Typography>
			<IconButton>
				<AddCircleOutline />
			</IconButton>
		</Box>
	);
};

export default ComponentCounter;
