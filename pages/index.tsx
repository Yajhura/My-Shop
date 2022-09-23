import { MainLayout } from '@/layout/MainLayout';
import type { NextPage } from 'next';
import Typography from '@mui/material/Typography';
import { LayoutProducts } from '@/layout/LayoutProducts';
import { initialData } from '@/database';
import { CardProduct } from '@/components/CardProduct';

const Home: NextPage = () => {
	return (
		<MainLayout title="MyShop - Home" description="Encuentra Los mejores Prodcutos Aqui">
			<Typography variant="h1" component="h1">
				Shop
			</Typography>
			<Typography mb={4} variant="h2">
				All Products
			</Typography>

			<LayoutProducts>
				{initialData.products.map((product) => (
					<CardProduct {...product} key={product.title} />
				))}
			</LayoutProducts>
		</MainLayout>
	);
};

export default Home;
