import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@/utils/db';
import FormDataModel from '@/Models/DocData';

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
    await dbConnect.connect();

    switch (req.method) {
        case 'GET':
            return getHandler(req, res);
        default:
            res.status(405).json({ message: 'Method Not Allowed' });
    }
}

async function getHandler(req: NextApiRequest, res: NextApiResponse<any>) {
    try {
        const formDataList = await FormDataModel.find({});
        res.status(200).json(formDataList);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}
