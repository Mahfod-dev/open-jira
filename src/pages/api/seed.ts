import type { NextApiRequest, NextApiResponse } from 'next';
import { connectDB } from '../../../database/db';

type Data = {
	name?: string;
	message?: string;
};

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	if (process.env.NODE_ENV !== 'development') {
		res.status(404).json({ message: 'Not Found this service' });
		return;
	}

	await connectDB();

	res.status(200).json({ message: 'Process ok' });
}
