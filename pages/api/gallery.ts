import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@/utils/db';
import SectionModel from '@/Models/gallery';

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
    await dbConnect.connect();

    switch (req.method) {
        case 'GET':
            return getHandler(req, res);
        case 'POST':
            return postHandler(req, res);
        case 'DELETE':
            return deleteHandler(req, res);
        case 'PUT':
            return updateHandler(req, res);
        default:
            res.status(405).json({ message: 'Method Not Allowed' });
    }
}

async function getHandler(req: NextApiRequest, res: NextApiResponse<any>) {
    try {
        const sections = await SectionModel.find({});
        res.status(200).json(sections);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

async function postHandler(req: NextApiRequest, res: NextApiResponse<any>) {
    try {
        let formData;
        const body = req.body;

        if (Array.isArray(body)) {
            formData = await SectionModel.insertMany(body);
        } else {
            formData = await SectionModel.create(body);
        }
        res.status(201).json(formData);
    } catch (error: any) {
        
        if (error.code === 11000) {
            const duplicateKey = Object.keys(error.keyValue)[0];
            res.status(400).json({ message: `Duplicate key error` });
        } else {
            console.error(error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }
}

async function deleteHandler(req: NextApiRequest, res: NextApiResponse<any>) {
    try {
        const id = req.query.id as string;
        const deletedSection = await SectionModel.findByIdAndDelete(id);
        if (deletedSection) {
            res.status(200).json({ message: 'Section deleted successfully' });
        } else {
            res.status(404).json({ message: 'Section not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

async function updateHandler(req: NextApiRequest, res: NextApiResponse<any>) {
    try {
        const id = req.query.id as string;
        const { imageUrls } = req.body;

        const updatedSection = await SectionModel.findByIdAndUpdate(
            id,
            { imageUrls },
            { new: true }
        );

        if (!updatedSection) {
            return res.status(404).json({ message: "Section not found" });
        }

        res.status(200).json(updatedSection);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}
