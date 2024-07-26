import mongoose from 'mongoose';

const UniversitiesSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
    },
    { timestamps: true }
);

export default mongoose.models.Universities || mongoose.model('Universities', UniversitiesSchema);
