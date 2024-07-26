// pages/api/profile.ts

import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcryptjs';
import connectDB from '@/utils/db';
import User from '@/Models/User';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'PUT') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    // Destructure the request body
    const {
        names,
        email,
        phone,
        department,
        profilePicture,
        currentPassword,
        newPassword,
    } = req.body;

    try {
        await connectDB.connect();


        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const passwordMatch = await bcrypt.compare(currentPassword, user.password);

        if (!passwordMatch) {
            return res.status(400).json({ message: 'Incorrect current password' });
        }

        user.name = names;
        user.phoneNumber = phone;
        user.department = department;
        user.profilePicture = profilePicture;

        if (newPassword) {
            const hashedPassword = await bcrypt.hash(newPassword, 10);
            user.password = hashedPassword;
        }

        await user.save();

        return res.status(200).json({ message: 'Profile updated successfully' });
    } catch (error) {
        console.error('Error updating profile:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}
