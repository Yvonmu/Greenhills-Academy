import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@/utils/db';
import SourceModel from '@/Models/NurseryData';
import DestinationModel from '@/Models/Transfer/NurseryData';
import mongoose from 'mongoose';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Connect to MongoDB
  await dbConnect.connect();
  if (req.method === 'GET') {
    try {
      // Connect to MongoDB
      await dbConnect.connect();

      // Retrieve data from the destination database
      const destinationData = await DestinationModel.find();

      // Send the retrieved data as a response
      return res.status(200).json(destinationData);
    } catch (error) {
      console.error('Failed to retrieve data:', error);
      return res.status(500).json({ error: 'Failed to retrieve data' });
    }
  } else if (req.method === 'POST'){
    try {
      // Delete existing documents in the destination database
      await DestinationModel.deleteMany({});
  
      // Retrieve data from the source database
      const sourceData = await SourceModel.find();
  
      // Transform data if necessary
  
      // Insert or update data into the destination database
      await Promise.all(
        sourceData.map(async (data) => {
          // Generate a new ID for the document
          const newData = { ...data.toObject(), _id: new mongoose.Types.ObjectId() };
  
          // Example: Insert data into the destination database
          await DestinationModel.create(newData);
        })
      );
  
      // Data transfer successful
      return res.status(200).json({ success: true });
    } catch (error) {
      console.error('Data transfer failed:', error);
      return res.status(500).json({ error: 'Data transfer failed' });
    }
  }else {
    return res.status(405).json({ error: 'Method Not Allowed', allowedMethods: ['GET','POST'] });
  }
 
}
