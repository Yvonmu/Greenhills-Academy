import mongoose from 'mongoose';

const SchoolCardSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        image: { type: [String], required: true },
        link: { type: String, required: true },
    },
    { timestamps: true }
);

export default mongoose.models.SchoolCard || mongoose.model('SchoolCard', SchoolCardSchema);
