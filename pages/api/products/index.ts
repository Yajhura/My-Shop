import type { NextApiRequest, NextApiResponse } from 'next';
import { db, SHOP_CONTASTE } from 'database';

import { Product } from '@/interface';
import ProductModel from 'database/models/product';

type Data =
	| {
			message: string;
	  }
	| Product[];

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
	switch (req.method) {
		case 'GET':
			return getProducts(req, res);

		default:
			return res.status(405).json({ message: 'Method not allowed' });
	}
}

const getProducts = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
	const { gender = 'all ' } = req.query;

	let condition = {};

	if (gender !== 'all' && SHOP_CONTASTE.genders.includes(`${gender}`)) {
		condition = { gender };
	}

	try {
		await db.connect();

		const products = await ProductModel.find(condition)
			.select('title price images price inStock slug -_id')
			.lean();

		return res.status(200).json(products);
	} catch (error) {
		console.log(error);

		return res.status(400).json({ message: 'Hubo un error' });
	} finally {
		await db.disconnect();
	}
};
