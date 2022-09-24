import { Product } from '@/interface';
import ProductModel from 'database/models/product';
import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from 'database';

type Data =
	| {
			message: string;
	  }
	| Product[];

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
	switch (req.method) {
		case 'GET':
			return searchProduction(req, res);

		default:
			return res.status(405).json({ message: 'Method not allowed' });
	}
}

async function searchProduction(req: NextApiRequest, res: NextApiResponse<Data>) {
	let { q = '' } = req.query;

	if (q.length === 0)
		return res.status(400).json({ message: 'Debe especificar el método de búsqueda' });

	q = q.toString().toLowerCase();

	try {
		await db.connect();

		const products = await ProductModel.find({
			$text: { $search: q },
		})
        .select("title images price inStock slug -_id")
        .lean();

		return res.status(200).json(products);
	} catch (error) {
		console.log('hubo un erro');
	} finally {
		await db.disconnect();
	}
}
