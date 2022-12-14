// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { initialData } from '@/database';
import { db } from 'database';
import Product from 'database/models/product';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
	message: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
	if (process.env.NODE_ENV === 'production') {
		return res.status(401).json({ message: 'No tiene acceso a este servicio' });
	}

	try {
		await db.connect();
		await Product.deleteMany();
		await Product.insertMany(initialData.products);
		await db.disconnect();
		res.status(200).json({ message: 'Proceso realizado correctamente' });
	} catch (error) {
		console.log(error);

		res.status(400).json({ message: 'Hubo un erro ' });
	}
}
