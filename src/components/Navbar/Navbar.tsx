import AppBar from '@mui/material/AppBar';
import ToolBar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import NextLink from 'next/link';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MenuIcon from '@mui/icons-material/Menu';
export interface NavbarInterface {}

const menuItems = [
	{
		title: 'Hombre',
		path: '/category/men',
	},
	{
		title: 'Mujer',
		path: '/category/woman',
	},
	{
		title: 'Niños',
		path: '/category/kid',
	},
];

const Navbar: React.FC<NavbarInterface> = () => {
	return (
		<AppBar position="fixed">
			<ToolBar>
				<Box
					flex={1}
					display="flex"
					alignItems="center"
					justifyContent="space-between"
					padding={'0 5px'}>
					<NextLink href="/" passHref>
						<Link>
							<Typography color="primary.light" variant="h6">
								MyShop
							</Typography>
						</Link>
					</NextLink>

					<Box
						sx={{
							display: { xs: 'none', md: 'block' },
						}}>
						{menuItems.map((item, index) => (
							<NextLink href={item.path} key={item.path} passHref>
								<Link
									sx={{
										ml: 2,
									}}>
									<Button>{item.title}</Button>
								</Link>
							</NextLink>
						))}
					</Box>

					<Box>
						<IconButton>
							<SearchOutlinedIcon />
						</IconButton>

						<NextLink href="/cart/" passHref>
							<Link>
								<IconButton>
									<Badge badgeContent={2} color="secondary">
										<ShoppingCartOutlinedIcon />
									</Badge>
								</IconButton>
							</Link>
						</NextLink>

						<IconButton>
							<MenuIcon />
						</IconButton>
					</Box>
				</Box>
			</ToolBar>
		</AppBar>
	);
};

export default Navbar;
