import Box from "@mui/material/Box"
import Divider from "@mui/material/Divider"
import Drawer from "@mui/material/Drawer"
import IconButton from "@mui/material/IconButton"
import Input from "@mui/material/Input"
import InputAdornment from "@mui/material/InputAdornment"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import ListSubheader from "@mui/material/ListSubheader"
import AccountCircleOutlined from "@mui/icons-material/AccountCircleOutlined"
import CategoryOutlined from "@mui/icons-material/CategoryOutlined"
import AdminPanelSettings from "@mui/icons-material/AdminPanelSettings"
import ConfirmationNumberOutlined from "@mui/icons-material/ConfirmationNumberOutlined"
import EscalatorWarningOutlined from "@mui/icons-material/EscalatorWarningOutlined"
import FemaleOutlined from "@mui/icons-material/FemaleOutlined"
import LoginOutlined from "@mui/icons-material/LoginOutlined"
import MaleOutlined from "@mui/icons-material/MaleOutlined"
import VpnKeyOutlined from "@mui/icons-material/VpnKeyOutlined"
import SearchOutlined from "@mui/icons-material/SearchOutlined"

import { useState } from 'react';

const menuUser = [
	{
		title: 'Profile',
		icon: <AccountCircleOutlined />,
	},
	{
		title: 'Mis Ordenes',
		icon: <ConfirmationNumberOutlined />,
	},
	{
		title: 'Ingresar',
		icon: <VpnKeyOutlined />,
	},
];

const menuAdmin = [
	{
		title: 'Productos',
		icon: <CategoryOutlined />,
	},
	{
		title: 'Ordenes',
		icon: <ConfirmationNumberOutlined />,
	},
	{
		title: 'Usuarios',
		icon: <AdminPanelSettings />,
	},
];

const menuCategories = [
	{
		title: 'Hombre',
		icon: <MaleOutlined />,
	},
	{
		title: 'Mujer',
		icon: <FemaleOutlined />,
	},
	{
		title: 'Niños',
		icon: <EscalatorWarningOutlined />,
	},
];

const Sidebar = () => {
	const [open, setOpen] = useState(false);
	return (
		<Drawer
			open={open}
			anchor="right"
			sx={{ backdropFilter: 'blur(4px)', transition: 'all 0.5s ease-out' }}>
			<Box
				sx={{
					width: {
						xs: 250,
						sm: 300,
						md: 350,
					},
					paddingTop: 5,
				}}>
				<List>
					<ListItem>
						<Input
							fullWidth
							type="text"
							placeholder="Buscar..."
							endAdornment={
								<InputAdornment position="end">
									<IconButton aria-label="toggle password visibility">
										<SearchOutlined />
									</IconButton>
								</InputAdornment>
							}
						/>
					</ListItem>

					{/* MenuUser */}

					{menuUser.map((item, index) => (
						<ListItem key={index * Math.random()} button>
							<ListItemIcon>{item.icon}</ListItemIcon>
							<ListItemText primary={item.title} />
						</ListItem>
					))}

					{/* MenuCategories */}

					{menuCategories.map((item, index) => (
						<ListItem
							key={index * Math.random()}
							button
							sx={{ display: { xs: '', md: 'none' } }}>
							<ListItemIcon>{item.icon}</ListItemIcon>
							<ListItemText primary={item.title} />
						</ListItem>
					))}

					{/* Admin */}
					<Divider />
					<ListSubheader>Admin Panel</ListSubheader>

					{menuAdmin.map((item, index) => (
						<ListItem key={index * Math.random()} button>
							<ListItemIcon>{item.icon}</ListItemIcon>
							<ListItemText primary={item.title} />
						</ListItem>
					))}

					<Divider />
					<ListItem button>
						<ListItemIcon>
							<LoginOutlined />
						</ListItemIcon>
						<ListItemText primary={'Salir'} />
					</ListItem>
				</List>
			</Box>
		</Drawer>
	);
};
export default Sidebar;
