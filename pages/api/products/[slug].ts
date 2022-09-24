import { Product } from '@/interface';
import { db } from 'database';
import ProductModel from 'database/models/product';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data =
	| {
			message: string;
	  }
	| Product;

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
	switch (req.method) {
		case 'GET':
			return getProductBySlug(req, res);

		default:
			return res.status(405).json({ message: 'Method not allowed' });
	}
}

const getProductBySlug = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
	const { slug } = req.query;

	try {
		await db.connect();
		const product = await ProductModel.findOne({ slug }).lean();
		if (!product) {
			return res.status(404).json({ message: 'Product not found' });
		}
		return res.status(200).json(product);
	} catch (error) {
		console.log(error);
		return res.status(400).json({ message: 'Hubo un error' });
	} finally {
		await db.disconnect();
	}
};
